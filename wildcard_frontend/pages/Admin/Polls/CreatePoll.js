import { handler } from "../../api"
import { useRouter } from "next/router"
import Router from "next/router"
import styles from "../../../styles/Admin/PollCreate.module.css" 
import Layout from "../../../Component/layout"
import MenuList from "../../../Component/menulist"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CallTracker } from "assert"

export default function PollCreate({Menus}){
    const [PollMenus, setPollmenus] = useState([]);
    const HandleOnSubmit = (e) =>{
        console.log(PollMenus)
        if (PollMenus.length != 0){
            {PollMenus?.map(Menus => {
                
            e.preventDefault()
            const options ={
            method: "POST",
            body: JSON.stringify({
                Menus : Menus.id,
                Poll : 1
            }),
            headers:{
                'Content-Type':'application/json'
            }
            }
            fetch('http://127.0.0.1:8000/api/selection',options).
            then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())

            })
            }
            // Router.push('/admin/Polls')
        }else{
            return
        }
    }
    function HandleOnCheck(e) {
        const menu = e.target.value;
        console.log(menu);
        setPollmenus([...PollMenus,menu]);
        console.log(PollMenus)
      }
    return (
        <Layout>
        
            <h1>PollCreate</h1>
            <div className={styles.ListContainer}>
            <ul className={styles.list}>
                {Menus?.map(menu => {
                    return (
                    <li className={styles.card} key={menu.id}>
                    <span>
                        <h2>{menu.Name}</h2>
                        {menu.Description}
                    </span>
                    <input className={styles.input} onChange={HandleOnCheck} type="checkbox" value={menu.id}/>
                    </li>)
                })}
            </ul>

            <ul className={styles.list}>
                {PollMenus.map(pollmenu => {
                    const menu = Menus.find(obj => obj.id.toString() === pollmenu);
                        return (
                            <li className={styles.card} key={menu.id}>
                            <span>
                                <h2>{menu.Name}</h2>
                                {menu.Description}
                            </span>
                        </li>)    
                })}
            </ul>
            </div>
            <div>
            <button className="btn btn-primary btn-lg " onClick={HandleOnSubmit}>Submit</button>
            </div> 

        </Layout>
        )
    }

export async function getServerSideProps(){
    const Menus = await handler("http://127.0.0.1:8000/api/menu")
    const Polls = await handler("http://127.0.0.1:8000/api/poll")

    return {
        props: { 
            Menus,
            Polls,
        }
    }
}
