import Layout from "../../../Component/layout";
import MenuList from "../../../Component/menulist";
import styles from "../../../styles/Admin/Menus.module.css"
import Link from "next/link"
import {handler} from "../../api"
export default function AllMenu( props ){
    return (
        <Layout>
        <div className={styles.container}>
        <h1>All menus </h1>
        <Link href="Menus/CreateMenu" className="bi bi-plus-circle"></Link>
        
        <MenuList {...props}/>
        </div>
        </Layout>
    )
}
export async function getStaticProps(){

    const Menus = await handler("http://127.0.0.1:8000/api/menu");
    return {
      props: { Menus }
    }
  }