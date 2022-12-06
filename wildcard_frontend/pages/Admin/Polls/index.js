
import Layout from "../../../Component/layout";
import styles from "../../../styles/Admin/Polls.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import {handler} from "../../api"
import { useEffect, useState } from "react";
export default function AllPolls( {Polls,Weeks} ){
  const [polls , setpolls] = useState([])
  const router = useRouter();
  useEffect(()=> {
    setpolls(Polls.map((poll) => poll))
  },[])
  const HandleOnCreate = (e) => {
      e.preventDefault()
      const options ={
          method: "POST",
          body: JSON.stringify({
              Week:1
          }),
          headers:{
              'Content-Type':'application/json'
          }
      }
      const update = fetch('http://127.0.0.1:8000/api/poll',options).
      then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error()).finally(router.reload)

      
    }
    return (
        <Layout>
        <h1>All Polls </h1>
        <button onClick={HandleOnCreate} className="bi bi-plus-circle d-inline-block"></button>
        <button>Export all Polls</button>
        <ul className={styles.list}>
        {polls?.map((poll) => {
          return (
              <li className={styles.card} key={poll.id}>
                <Link href={`Polls/${poll.id}`}><span>
                <h2>Poll {poll.id}</h2>
                {poll.DateCreated}</span>
                </Link>
              </li>)
            })}
        </ul>
        {/* <button onClick={DownloadExcel}> Download Results </button> */}
        </Layout>
    )
}
export async function getServerSideProps(){
    const Polls = await handler("http://127.0.0.1:8000/api/poll");
    const Weeks = await handler("http://127.0.0.1:8000/api/week")
    return {
      props: { 
        Polls,
        Weeks
      }
    }
  }