import Layout from "../../../Component/layout";
import MenuList from "../../../Component/menulist";
import styles from "../../../styles/Admin/Menus.module.css"
import Link from "next/link"
import Image from "next/image"
import {handler} from "../../api"
import Add from "../../../public/add50.jpg"
export default function AllMenu( props ){
  
    return (
        <Layout>
        <div className={styles.container}>
          <h1>All menus </h1>
          <Link href="/Admin" className="btn btn-primary btn-lg m-2">Return to main </Link>
          <Link href="Menus/CreateMenu" className={styles.btnCreate}><Image className={styles.image} src={Add} alt="add"/></Link>
        <MenuList {...props}/>
        </div>
        </Layout>
    )
}
export async function getServerSideProps(){

    const Menus = await handler("http://127.0.0.1:8000/api/menu");
    return {
      props: { 
        Menus,
       }
    }
  }