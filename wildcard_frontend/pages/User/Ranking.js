
import Head from "next/head";
import styles from "../../styles/User/Ranking.module.css"
import Layout from "../../Component/layout";
import { handler } from "../api";
import {useState,useEffect} from "react";


function ranking({Menus,Polls,Selections}){
  const MenusPoll = new Array();
  const current = new Date();
  const DateNow = current.getFullYear() + "-" + current.getMonth() + "-" + current.getDate()
  const [PollId , setPollId] = useState()
  console.log(DateNow)
  useEffect(()=>{
    // console.log(Polls)
    //   {Polls.map((poll)=>{
    //   if (startdate != null){
    //     if ((poll.StartDate.isBefore(DateNow)) || (poll.StartDate == DateNow)){
    //       if ((poll.StartDate.isAfter(DateNow)) || (poll.StartDate == DateNow)){
    //         setPollId(poll.id)
    //       }
    //     }
        console.log(PollId)
    )}
    },[])
  console.log(PollId)
  return (
    <Layout>
      <div className={styles.ListContainer}>
            <ul className={styles.list}>
                {MenusPoll?.map(MenuId => {
                    const menu = Menus.find(obj => obj.id.toString() === MenuId);
                    return (
                    <li className={styles.card} key={menu.id}>
                    <span>
                        <h2>{menu.Name}</h2>
                        {menu.Description}
                    </span>
                    <input className={styles.input} onChange={HandleOnCheckDisp} type="checkbox" value={menu.id}/>
                    </li>)
                })}
            </ul>
        </div>
    </Layout>
  )
};
export async function getStaticProps(){
  const Menus = await handler("http://127.0.0.1:8000/api/menu")
  const Polls = await handler("http://127.0.0.1:8000/api/poll")
  const Selections = await handler("http://127.0.0.1:8000/api/selection")
  return {
    props:{
      Menus,
      Polls,
      Selections
    }
  }
}
export default ranking;