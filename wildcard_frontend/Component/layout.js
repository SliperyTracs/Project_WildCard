
import NavBar from "./Navbar"

import styles from "../styles/Layout.module.css"

export default function Layout({children}
    ){
    return(
        <div>
        <NavBar/>
        <main>
        {children}
        </main>
        </div>
        
    )
}