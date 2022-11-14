import {useRouter} from "next/router"
import styles from "../styles/NavBar.module.css"
export default function Navbar(){
    // const links = [
    //     {
    //         title:"Home",
    //         path:"/"
    //     },
    //     {
    //         title:"Rankings",
    //         path:"/ranking"
    //     },
    //     {
    //         title:"Results",
    //         path:"/results"
    //     }
    // ];
    const router = useRouter();
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">  
            <a class="navbar-brand ml-10" href="/">Project Wildcard</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link" href="/adminLogin">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/results">Results</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
            
    )
}