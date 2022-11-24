import { handler } from "../../api"
import { useRouter } from "next/router"
import Router from "next/router"
import styles from "../../../styles/Admin/PollCreate.module.css" 
import Layout from "../../../Component/layout"
import MenuList from "../../../Component/menulist"
import Link from "next/link"

export default function PollCreate({Menus}){
    const PollMenus = new Array()
    const HandleOnSubmit = (e) =>{
        if (PollMenus.length==0){
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
            Router.push('/admin/Polls')
        }else{
            return
        }
        }
    return (
        <Layout>
        
        <div><h1>PollCreate</h1></div>
            <div className={styles.ListContainer}>
            <ul className={styles.list}>
                {Menus?.map(menu => {
                    const AddtoPoll = (event)=>{
                        if (PollMenus.includes(menu)){
                            return alert(`Menu alrdy contains selected`)
                        }
                        else{
                        PollMenus.push(menu)
                        }
                        console.log(PollMenus)
                    }
                    return (
                    <li className={styles.card} key={menu.id}>
                    <Link href="/" rel="noreferrer nofollower">
                        <h2>{menu.Name}</h2>
                        {menu.Description}
                    </Link>
                    <input className={styles.input} onClick={AddtoPoll} type="button" value="+"/>
                    </li>)
                })}
            </ul>
            
            <MenuList {...PollMenus}/>
            </div>
            <div>
            <Link className={styles.btn} href="/admin/Polls" onClick={HandleOnSubmit}>Submit</Link>
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
