import Link from "next/link"
import NavBar from "./Navbar"
import {useRouter} from "next/router"
import styles from "../styles/Layout.module.css"


export default function Layout({children}){
    return(
        <div className={styles.container}>
        <NavBar/>
        {children}
        </div>
        
    )
}