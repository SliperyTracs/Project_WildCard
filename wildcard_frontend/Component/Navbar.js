import {useRouter} from "next/router"

export default function Navbar(){
    const router = useRouter();
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="User/Ranking">
                  Ranking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


            
    )
}