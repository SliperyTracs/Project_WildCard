import { handler } from "../../api"
import { useRouter } from "next/router"
import Router from "next/router"
import styles from "../../../styles/Admin/PollCreate.module.css" 
import Layout from "../../../Component/layout"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function PollCreate({Menus,Poll_id}){
    const [PollMenus, setPollmenus] = useState([]);
    const [MenusDisp, setMenusDisp] = useState([]);
    const [StartDate, setStartDate] = useState(new Date());
    const [EndDate, setEndDate] = useState(new Date());
    var current = new Date()
   
    const HandleOnSubmit = (e) =>{
    
        if (PollMenus.length != 0){
            {PollMenus?.map(menu_id => {
                
            e.preventDefault()
            const options ={
            method: "POST",
            body: JSON.stringify({
                Menus : menu_id,
                Poll : Poll_id
            }),
            headers:{
                'Content-Type':'application/json'
            }
            }
            fetch('http://127.0.0.1:8000/api/selection',options).
            then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())

            })
            e.preventDefault()
            
            const options ={
            method: "PUT",
            body: JSON.stringify({
                StartDate,
                EndDate,
                Week:1
            }),
            headers:{
                'Content-Type':'application/json'
            }
            }
            fetch(`http://127.0.0.1:8000/api/poll/${Poll_id}`,options).
            then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
            }
            Router.push('/Admin/Polls')
        }else{
            return
        }
    }
    useEffect(()=>{
        setMenusDisp(Menus.map(({id}) => id.toString()));
        setStartDate( current.getFullYear() + "-" + current.getMonth() + "-" + current.getDate() )
        console.log(StartDate)
    },[])
      
    function HandleOnCheckDisp(e) {
        const menu = e.target.value;
        if (e.target.checked){
            setPollmenus([...PollMenus,menu]);
            setMenusDisp(current =>
                current.filter(id => {
                    return id.toString() !== e.target.value 
                }),
            )
            console.log(MenusDisp)
        }
        else {
            setPollmenus(current =>
                current.filter(id => {
                    return id !== e.target.value 
                }),
            )
            console.log(PollMenus)
        }
      }
    function HandleOnCheckPoll(e) {
        const menu = e.target.value;
        if (!e.target.checked){
            setPollmenus(current =>
                current.filter(id => {
                    return id !== e.target.value 
                }),
            )
            setMenusDisp([...MenusDisp,menu]);
        }
        else{
            return
        }
      }

      console.log(StartDate)
    return (
        <Layout>
        
            <h1>PollCreate</h1>
            <div>
                <label>Start date</label>
                <input type="date" defaultValue={StartDate} onChange={(event) => setStartDate(event.target.value)}></input>
                <label>End date</label>
                <input type="date" defaultValue={EndDate} onChange={(event) => setEndDate(event.target.value)}></input>
            </div>
            <div className={styles.ListContainer}>
            <ul className={styles.list}>
                {MenusDisp?.map(MenuId => {
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

            <ul className={styles.list}>
                {PollMenus?.map(pollmenu => {
                    const menu = Menus.find(obj => obj.id.toString() === pollmenu);
                        return (
                            <li className={styles.card} key={menu.id}>
                            <span>
                                <h2>{menu.Name}</h2>
                                {menu.Description}
                            </span>
                            <input className={styles.input} defaultChecked={true} onChange={HandleOnCheckPoll} type="checkbox" value={menu.id}/>
                        </li>)    
                })}
            </ul>
            </div>
            <div>
            <button className="btn btn-primary btn-lg" onClick={HandleOnSubmit}>Submit</button>
            </div> 

        </Layout>
        )
    }

export async function getServerSideProps({params}){
    const Menus = await handler("http://127.0.0.1:8000/api/menu")
    const Polls = await handler("http://127.0.0.1:8000/api/poll")
    const Poll_id = params.poll
    return {
        props: { 
            Menus,
            Poll_id
        }
    }
}
