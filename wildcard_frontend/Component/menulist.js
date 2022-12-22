import styles from "../styles/MenuList.module.css"
import Link from "next/link"
import Image from "next/image";
import NotFound from "../public/notfound.gif"
export default function MenuList({Menus, link}){

    return(
        <main>
            <div className={styles.list}>
                {Menus?.map(menu => { 
                    if (menu=null){
                        return
                    } 
                    const image = menu.Image == null ? menu.Image : NotFound
                    return (
                    <a href={link} rel="noreferrer nofollower" className={styles.card} key={menu.id}>
                        <span>
                        <Image width="100" height="75"src={image} alt="nasi-lemak"/>
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
