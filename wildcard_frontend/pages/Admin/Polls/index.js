
import Layout from "../../../Component/layout";
import styles from "../../../styles/Admin/Polls.module.css"
import Link from "next/link"
import {handler} from "../../api"
export default function AllPolls( {Polls} ){
    const HandleOnClick = (e) => {
        e.preventDefault()
        const options ={
            method: "POST",
            body: JSON.stringify({
                
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch('http://127.0.0.1:8000/api/poll',options).
        then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
      }
    return (
        <Layout>
        <h1>All Polls </h1>
        <button onClick={HandleOnClick} className="bi bi-plus-circle d-inline-block"></button>
        <button>Export all Polls</button>
        <ul>
        {Polls?.map((poll) => {
          return (
              <li className={styles.card} key={poll.id}>
                <Link href={`Polls/${poll.id}`}><span>
                <h2>Poll {poll.Poll_no}</h2>
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
    return {
      props: { 
        Polls
      }
    }
  }