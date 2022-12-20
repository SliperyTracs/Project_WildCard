import styles from "../styles/MenuList.module.css"
import Link from "next/link"
import Image from "next/image";
import nasi from "../public/Nasi-lemak.jpg"
export default function MenuList({Menus, draggable}){

    return(
        <main>
            <div className={styles.list}>
                {Menus?.map(menu => {
                    
                    return (
                    <a href="/" rel="noreferrer nofollower" className={styles.card} key={menu.id}>
                        <span>
                        <Image width="0" height="0"src={nasi} alt="nasi-lemak"/>
                        <h4>{menu.Name}</h4>
                        {menu.Description}
                        </span>
                    </a>
                    )
                })}
            </div>
        </main>
    )
}
