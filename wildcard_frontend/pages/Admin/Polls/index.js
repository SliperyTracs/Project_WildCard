
import Layout from "../../../Component/layout";
import styles from "../../../styles/Admin/Polls.module.css"
import Link from "next/link"
import {handler} from "../../api"
export default function AllPolls( {Polls} ){

    return (
        <Layout>
        <h1>All Polls </h1>
        <Link href="Polls/CreatePoll" className="bi bi-plus-circle"><span>Create poll </span> </Link>
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
        <button onClick={DownloadExcel}> Download Results </button>
        </Layout>
    )
}
export async function getServerSideProps(){
    const Polls = await handler("http://127.0.0.1:8000/api/poll");
    const Weeks = await handler("http://127.0.0.1:8000/api/poll");
    const Selections = await handler("http://127.0.0.1:8000/api/poll");
    return {
      props: { 
        Polls,
        Weeks,
        Selections
      }
    }
  }