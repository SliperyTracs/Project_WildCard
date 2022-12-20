
import NavBar from "./Navbar"

export default function Layout({children}){
    return(
        <div>
        <NavBar/>
        <main>
        {children}
        </main>
        </div>
        
    )
}