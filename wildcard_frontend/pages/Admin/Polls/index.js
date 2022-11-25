
import Layout from "../../../Component/layout";
import styles from "../../../styles/Menulist.module.css"
import {handler} from "../../api"
export default function AllPolls( {Polls} ){
    return (
        <Layout>
        <h1>All Polls </h1>
        <ul>
        {Polls?.map(poll => {
          return (
              <li className={styles.card} key={poll.id}>
                <h2>Poll {poll.Poll_no}</h2>
                {poll.DateCreated}
              </li>)
            })}
        </ul>
        </Layout>
    )
}
export async function getStaticProps(){

    const Polls = await handler("http://127.0.0.1:8000/api/poll");
    return {
      props: { Polls }
    }
  }