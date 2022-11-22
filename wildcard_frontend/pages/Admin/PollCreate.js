import { handler } from "../api"
import { useRouter } from "next/router"
import styles from "../../styles/Admin/POllCreate.module.css" 
import Layout from "../../Component/layout"
import MenuList from "../../Component/menulist"
import Link from "next/link"

export default function POllCreate({Menus}){
    const router = useRouter()
    const PollMenus= new Array();
    const HandleOnClick = (event) =>{
        {PollMenus?.map(item => {
            
        })
    }
    return (
        <Layout>
        <main className={styles.container}>
            <div className={styles.ListContainer}>
            <ul className={styles.list}>
                {Menus?.map(menu => {
                    const AddtoPoll = (event)=>{
                        PollMenus.push(menu.id)
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
            <button className={styles.btn} onClick={HandleOnClick}>Submit</button>
            </div>
        </main>
        </Layout>
        )
    }
}
export async function getStaticProps(){
    const Menus = await handler("http://127.0.0.1:8000/api/menu")
    const Polls = await handler("http://127.0.0.1:8000/api/poll")
    const Selections = await handler("http://127.0.0.1:8000/api/selection")
    return {
        props: { 
            Menus,
            Polls,
            Selections,
        }
    }
}
