import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

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
    ],
    onVerify: async (user, account, profile) => {
      console.log(user)
      if (user.email === 'sheepj117@gmail.com') {
        user.isAdmin = true
      }
  
      return user
    },
}

export default (req, res) => NextAuth(req, res, options)