// import { useAuth } from 'next-auth/react';

// export default function SignInForm() {
//   const { signIn } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await signIn('email', { email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//       />
//       <br />
//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <br />
//       <button type="submit">Sign in</button>
//     </form>
//   );
// }
import Head from 'next/head'
import Header from '../Component/header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import Layout from '../Component/layout'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <Layout>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <Header />      
        <div className={styles.user}>
           {loading && <div className={styles.title}>Loading...</div>}
           {
            session &&
              <div>
                <h1 className={styles.title}>Welcome, {session.user.name ?? session.user.email}!</h1>
               <p style={{ marginBottom: '10px' }}> </p> <br />
               <img src={session.user.image} alt="" className={styles.avatar} />
              </div>
            }
           {
            !session &&
              <div>
               <p className={styles.title}>Please log in to continue</p>
               <img src="no-user.jpg" alt="" className={styles.avatar} />               
              </div>
           }
         </div>
      </Layout>
  )
}
