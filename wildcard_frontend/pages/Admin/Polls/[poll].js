import Layout from "../../../Component/layout"

export default function Poll({Poll_id}){
   return(
    <Layout>
        <h1>Poll {Poll_id}</h1>
    </Layout>
   )
}
export async function getServerSideProps( { params } ) {

    return {
        props: {
            id: params.id
        }
    }
}