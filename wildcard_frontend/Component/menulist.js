import styles from "../styles/MenuList.module.css"
import Link from "next/link"
export default function MenuList({Menus, draggable}){

    return(
        <main>
            <ul className={styles.list}>
                {Menus?.map(menu => {
                    
                    return (
                    <li className={styles.card} key={menu.id}>
                    <Link href="/" rel="noreferrer nofollower">
                        <h2>{menu.Name}</h2>
                        {menu.Description}
                    </Link>
                    
                    </li>)
                })}
            </ul>
        </main>
    )
}
