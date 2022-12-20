import { handler } from "../../api"
import Router from "next/router"
import styles from "../../../styles/Admin/PollCreate.module.css" 
import Layout from "../../../Component/layout"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function PollCreate({Menus,Poll,Selections,Poll_id}){
    const [Loading, setLoading] = useState(true)
    const [PollMenus, setPollmenus] = useState([]);
    const [MenusDisp, setMenusDisp] = useState([]);
    const [StartDate, setStartDate] = useState(new Date());
    const [EndDate, setEndDate] = useState(new Date());
    const MenusInPoll = new Array()
    var current = new Date()
    
    const HandleOnSubmit = (e) =>{
        
        console.log(Selections)
        {Selections?.map(selection=>{
            
            if (selection.Poll.toString() == Poll_id){
                MenusInPoll.push(selection.id)
            }
        })}
        console.log(MenusInPoll)
        {MenusInPoll?.map(id => {
            const options ={
                method: 'DELETE'
                }
                fetch(`http://127.0.0.1:8000/api/selection/${id}`,options).
                then(response=>console.log(`response`,response)).catch(console.error())
    
        })}
        MenusInPoll.length = 0
        e.preventDefault()
        if (PollMenus.length != 0){
            {PollMenus?.map(menu_id => {
            
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
            
           }
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
 
<<<<<<< HEAD
<<<<<<< HEAD
            Router.push('/Admin/Polls')
=======
            Router.push('/admin/Polls')
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
=======
            Router.push('/admin/Polls')
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
        }else{
            alert("Please fill in the Poll before submitting")
            return
        }
    }
    function getPollSelections(setArray){
        const MenusInPoll = new Array()
        {Selections?.map(selection=>{
            if (selection.Poll.toString() == Poll_id){
                MenusInPoll.push(selection.Menus.toString())
            }
        })}
        setArray(MenusInPoll.map((id)=>id))
        MenusInPoll.length = 0
    }
    function dates(Poll){
        if (Poll.StartDate!=null){
            setStartDate(Poll.StartDate);
<<<<<<< HEAD
<<<<<<< HEAD
            setEndDate(Poll.EndDate)   
=======
            setEndDate(Poll.EndDate)
            
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
=======
            setEndDate(Poll.EndDate)
            
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
        }
        else{
            var day = current.getDate(); 
            if (day<10){
                day = '0' + day;
            }
            setStartDate( current.getFullYear() + "-" + current.getMonth() + "-" + day)
            setEndDate( current.getFullYear() + "-" + current.getMonth() + "-" + (parseInt(day) + 2))
            
        }
    }
    useEffect(()=>{
        if (Menus.length>0){
            setLoading(true)
        }
        setLoading(false)
        setMenusDisp(Menus.map(({id}) => id.toString()));
        getPollSelections(setPollmenus,Menus)
        console.log(PollMenus)
        {PollMenus.map(Menuid => {
            setMenusDisp(current =>
                current.filter(id => {
                    return id.toString() !== Menuid.toString()
                }),)

        })}
        dates(Poll)
    },[Loading])
      
    function HandleOnCheckDisp(e) {
        const menu = e.target.value;
        if (e.target.checked){
            setPollmenus([...PollMenus,menu]);
            setMenusDisp(current =>
                current.filter(id => {
                    return id.toString() !== e.target.value 
                }),
            )
        }
        else {
            setPollmenus(current =>
                current.filter(id => {
                    return id !== e.target.value 
                }),
            )
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

    return (
        <Layout>
            
            <h1>Poll {Poll.id}</h1>
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
<<<<<<< HEAD
<<<<<<< HEAD
                <Link className="btn btn-primary btn-lg m-2" href="/Admin/Polls">Cancel</Link>
=======
                <Link className="btn btn-primary btn-lg m-2" href="/admin/Polls">Cancel</Link>
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
=======
                <Link className="btn btn-primary btn-lg m-2" href="/admin/Polls">Cancel</Link>
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
                <button className="btn btn-primary btn-lg m-2" onClick={HandleOnSubmit}>Submit</button>
            </div>
            

        </Layout>
        )
    }
export async function getServerSideProps({params}){
    const Poll_id = params.poll
    const Menus = await handler("http://127.0.0.1:8000/api/menu")
    const Poll = await handler(`http://127.0.0.1:8000/api/poll/${Poll_id}`)
    const Selections = await handler("http://127.0.0.1:8000/api/selection")
    
    
    return {
        props: { 
            Menus,
            Poll,
            Selections,
            Poll_id
        }
    }
}
