import Layout from "../../../Component/layout";
import MenuList from "../../../Component/menulist";
import styles from "../../../styles/Admin/Menus.module.css"
import {handler} from "../../api"
export default function AllMenu( props ){
    return (
        <Layout>
        <h1>All menus </h1>
        <MenuList {...props}/>
        </Layout>
    )
}
export async function getStaticProps(){

    const Menus = await handler("http://127.0.0.1:8000/api/menu");
    return {
      props: { Menus }
    }
  }