import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../Component/layout'
import { handler } from './api'

export default function Home( {Menus} ) {
  return (
    <Layout>
    <div className={styles.container}>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Project wildcard
        </h1>

        <div className={styles.grid}>
            {Menus.map((menu) => {
                return ( 
                <a className={styles.card} key={menu.id}>
                  <h2>{menu.Name} &rarr;</h2>
                  <p>{menu.Description}</p>
                </a> )
            })}


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </Layout>
  )
}
export async function getStaticProps(){

  const Menus = await handler("http://127.0.0.1:8000/api/menu");
  return {
    props: { Menus:Menus }
  }
}


