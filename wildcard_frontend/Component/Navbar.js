import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Navbar(){
    const router = useRouter();
    const { data: session, status } = useSession()
    return(
        <nav
        className="navbar navbar-dark bg-dark navbar-expand-lg"
        aria-label="First navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>Project Wildcard</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarsExample01">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  {status == "authenticated" ? session.user.name : <>Home</>}
                </a>
              </li>
              <li className="nav-item">
                
                {status == "authenticated" ? <a className="nav-link" href="/login">Sign Out</a> : <a className="nav-link" href="/login">Sign In</a>}
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/User/Ranking">
                  Ranking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


            
    )
}