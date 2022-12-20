import Layout from "../../../Component/layout";
import MenuList from "../../../Component/menulist";
import styles from "../../../styles/Admin/Menus.module.css"
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link"
=======
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
=======
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
import {handler} from "../../api"
export default function AllMenu( props ){
    return (
        <Layout>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className={styles.container}>
        <h1>All menus </h1>
        <Link href="Menus/CreateMenu" className="bi bi-plus-circle"></Link>
        
        <MenuList {...props}/>
        </div>
        </Layout>
    )
}
export async function getServerSideProps(){
=======
=======
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
        <h1>All menus </h1>
        <MenuList {...props}/>
        </Layout>
    )
}
export async function getStaticProps(){
<<<<<<< HEAD
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
=======
>>>>>>> c87786d2070907e606f902197f4f0139f56616de

    const Menus = await handler("http://127.0.0.1:8000/api/menu");
    return {
      props: { Menus }
    }
  }