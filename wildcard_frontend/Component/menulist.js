import styles from "../styles/MenuList.module.css"
import Link from "next/link"
export default function MenuList({Menus}){
    return(
        <main>
            <ul className="list">
                {Menus.map(menu => {
                    return (<li className={styles.card}><Link href="/"><a rel="noreferrer nofollower"><h2>{menu.Name}</h2>{menu.Description}</a> </Link></li>)
                })}
            </ul>
        </main>
    )
}