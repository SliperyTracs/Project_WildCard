import Layout from "../../../Component/layout";
import { handler } from "../../api";
import styles from "../../../styles/User/Results.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Results({Poll,Selections,Menus,Votes}){
    const MenusId = new Array()
    const [Loading, setLoading] = useState(true)
    const [MenusPoll,setMenusPoll] = useState([])
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
        Selections?.map(selection =>{
            if (selection.Poll==Poll.id){
                MenusId.push(selection.Menus)
                console.log(selection.Menus)
            }
        })
        setMenusPoll(MenusId.map((id) => id))
        console.log(MenusPoll)
        MenusPoll.map(id =>{
            const vote = Votes.find(obj => obj.Menus === id);

        })
    },[]);
    return(
        <Layout>
            <h1>Poll {Poll.id}</h1>
            <Link className={styles.link} href="/admin/Polls">Return</Link>
            <div>
            <ul className={styles.list}>
            {MenusPoll.map(id => {
                const menu = Menus.find(obj => obj.id === id);
                const vote = Votes.find(obj => obj.Menus === id)
                    return (
                        <li className={styles.card} key={menu.id}>
                        <span>
                            <h2>{menu.Name}</h2>
                            <h3>Votes : {vote.Votes}</h3>
                            {menu.Description}
                            
                        </span>
                    </li>)    
                })}
            </ul>
            </div>
        </Layout>
    )
}

export async function getStaticProps({params}){

    const Poll = await handler(`http://127.0.0.1:8000/api/poll`);
    const Selections = await handler("http://127.0.0.1:8000/api/selection");
    const Menus = await handler("http://127.0.0.1:8000/api/menu")
    const Votes = await handler("http://127.0.0.1:8000/api/votes")
    return {
        props: { 
          Poll,
          Selections,
          Menus,
          Votes
        }
      }
}