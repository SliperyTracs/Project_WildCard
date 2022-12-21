import Layout from "../../../Component/layout";
import { handler } from "../../api";
import styles from "../../../styles/Admin/Results.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Results({Poll,Selections,Menus,Votes}){
    const MenusId = new Array()
    const [Loading, setLoading] = useState(true)
    const [MenusPoll,setMenusPoll] = useState([])
    useEffect(()=>{
        if (Menus.length>0){
            setLoading(true)
        }
        setLoading(false)
        Selections?.map(selection =>{
            if (selection.Poll==Poll.id){
                MenusId.push(selection.Menus)
                console.log(selection.Menus)
            }
        })
        setMenusPoll(MenusId.map((id) => id))
        console.log(MenusPoll)
    },[]);
    return(
        <Layout>
            <h1>Poll {Poll.id}</h1>
            <Link className={styles.link} href="/Admin/Polls">Return</Link>
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
export async function getStaticPaths({ slug: string }){

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
export async function getStaticProps({params}){
    const Poll_id = params.poll
    const Poll = await handler(`http://127.0.0.1:8000/api/poll/${Poll_id}`);
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