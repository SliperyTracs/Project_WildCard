import Layout from "../../../Component/layout";
import { handler } from "../../api";
import styles from "../../../styles/User/Results.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Results({Polls,Selections,Menus,Votes}){
    const VotesIds = new Array()
    const current = new Date()
    const [TotalVotes, setTotalVotes] = useState(0)  
    const [Loading, setLoading] = useState(true)
    const [VotesPoll,setVotesPoll] = useState([])
    const [PollId , setPollId] = useState(0)
    function checkDates(date){
        var day = current.getDate(); 
        if (day<10){
            day = '0' + day;
        }
        
    
        Polls?.map(poll=>{
          var Startdate = new Date(poll.StartDate)
          var Enddate = new Date(poll.EndDate)
          if (Startdate.getFullYear()>current.getFullYear()){return}
          if (Startdate.getMonth()>current.getMonth()){return}
          if (Startdate.getDate()>current.getDate()){return}
          if (Enddate.getFullYear()<current.getFullYear()){return}
          if (Enddate.getMonth()<current.getMonth()){return}
          if (Enddate.getDate()<current.getDate()){return}
          setPollId(poll.id)
        })
      }
    useEffect(()=>{
        if (Menus.length>0){
            setLoading(true)
        }
        setLoading(false)
        checkDates()
        var votes = 0
        Votes?.map(vote =>{
            const voteId = vote.id
            if (vote.Poll==1){
                VotesIds.push(vote.id)
                console.log(vote)
                votes += vote.Votes
                
            }
        })
        setVotesPoll(VotesIds)
        setTotalVotes(votes)
    },[Loading]);
    return(
        <Layout>
            <h1>Results</h1>
            <a className={styles.btnReturn} href="/">Return</a>
            <div>
            <ul className={styles.list}>
                <table>
                {VotesPoll.map(voteId =>{
                    const vote = Votes.find(obj => obj.id ===voteId)
                    const menu = Menus.find(obj => obj.id === vote.Menus);
                    console.log(typeof(TotalVotes))

                    var number = (vote.Votes / TotalVotes) * 100
                    var VotePercent = Math.round(number * 10) / 10
                    console.log(vote.Votes)
                    console.log(vote)
                    return(
                    <tr>
                        <td>
                            <a><h3>{menu.Name}</h3></a>
                        </td>
                        <td>
                            <a><span>{VotePercent} %</span></a>
                            
                        </td>
                    </tr>
                    )
                })} 
                </table>
            </ul>
            </div>
        </Layout>
    )
}
export async function getStaticProps(){
    const Polls = await handler(`http://127.0.0.1:8000/api/poll`);
    const Selections = await handler("http://127.0.0.1:8000/api/selection");
    const Menus = await handler("http://127.0.0.1:8000/api/menu")
    const Votes = await handler("http://127.0.0.1:8000/api/votes")
    return {
        props: { 
          Polls,
          Selections,
          Menus,
          Votes
        }
      }
}