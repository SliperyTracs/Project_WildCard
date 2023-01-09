import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';
const argon2 = require("argon2");

const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
          CredentialsProvider({
            id: 'credentials',
            name: 'my-project',
            credentials: {
              email: {
                label: 'email',
                type: 'email',
                placeholder: 'jsmith@example.com',
              },
              password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const response = await fetch('http://127.0.0.1:8000/api/admin')
                const users = await response.json()
                const user = users.find(obj => obj.Email==credentials.email)
                console.log(credentials.password)
                console.log(user.Password)
              // If the user doesn't exist, return an error
              if (!user) {
                console.log('User not found')
                return null
              }
             
              // If the user exists, compare the provided password to the
              // hashed password in the database
              const hashedPassword = await argon2.hash(credentials.password)
              
              const passwordIsValid = await argon2.verify(user.Password, credentials.password)
              console.log(passwordIsValid)

              // try {
              //   const isValid = argon2.verify(user.Password, hashedPassword)
              //   return isValid
              // } catch (error) {
                
              //   console.error(error)
              //   return false
              // }
              // // If the passwords don't match, return an error
              if (!passwordIsValid) {
                
                return console.log("invalid password")
              }
            
              // If the passwords match, return the user object
              return {
                id: user.id,
                name: user.email,
                email: user.email,
              }
            },
          }),
            // async authorize(credentials, req) {
            //   const payload = {
            //     Email: credentials.email,
            //     Password: credentials.password,
            //   };
      
            //   const res = await fetch('http://127.0.0.1:8000/api/admin', {
            //     method: 'POST',
            //     body: JSON.stringify(payload),
            //     headers: {
            //       'Content-Type': 'application/json',
            //       tenant: 'root',
            //       'Accept-Language': 'en-US',
            //     },
            //   });
              
            //   const user = await res.json();
            //   console.log(user)
            //   if (!res.ok) {
            //     throw new Error(user.exception);
            //   }
            //   // If no error and we have user data, return it
            //   if (res.ok && user) {
            //     return user;
            //   }
      
            //   // Return null if user data could not be retrieved
            //   return null;
            // },
          // }),
          // ...add more providers here
        ],
      secret: process.env.JWT_SECRET,
      // pages: {
      //   signIn: '/login',
      // },
      callbacks: {
        async jwt({ token, user, account }) {
          if (account && user) {
            
            return {
              ...token,
              // accessToken: user.data.token,
              // refreshToken: user.data.refreshToken,
            };
          }
    
          return token;
        },
    
        async session({ session, token }) {
          session.user.accessToken = token.accessToken;
          session.user.refreshToken = token.refreshToken;
          session.user.accessTokenExpires = token.accessTokenExpires;
    
          return session;
        },
      },
      theme: {
        colorScheme: 'auto', // "auto" | "dark" | "light"
        brandColor: '', // Hex color code #33FF5D
        logo: '/logo.png', // Absolute URL to image
      },
      // Enable debug messages in the console if you are having problems
      debug: process.env.NODE_ENV === 'development',
}

export default (req, res) => NextAuth(req, res, options)