import Layout from "../../../Component/layout"
import { handler } from "../../api"

export default function Weeks({Weeks}){
    return(
        <Layout>
        <h1>Week Display</h1>
        <ul>
            {Weeks?.map(week =>{
                return(
<<<<<<< HEAD
                <li key={week.id}>
=======
                <li>
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
                    <a>Week {week.Week_no}</a>
                </li>
            )

            })}
        </ul>
        </Layout>
    )
}

export async function getStaticProps(){
    const Weeks = await handler("http://127.0.0.1:8000/api/week");
    console.log(Weeks)
    return {
        props:{
            Weeks
        }
    }
}