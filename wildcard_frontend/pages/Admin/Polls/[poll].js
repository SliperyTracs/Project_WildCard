import Layout from "../../../Component/layout"
import { handler } from "../../api"

export default function Poll({id}){
   return(
    <Layout>
        <main>
        <h1>Poll {id}</h1>
            
        </main>
    </Layout>
   )
}
export async function getServerSideProps( { params } ) {
    const poll = await handler(`http://127.0.0.1:8000/api/poll/${params.poll}`)
    console.log(poll)
    const Selections = await handler("http://127.0.0.1:8000/api/selection")
    
    return {
        props: {
            id: params.poll
        }
    }
}