import MenuList from "../../../Component/menulist";

import {handler} from "../../api"
export default function AllMenu( props ){
    return (
        <>
        <h1>All menus </h1>
        <MenuList {...props}/>
        </>
    )
}
export async function getStaticProps(){

    const Menus = await handler("http://127.0.0.1:8000/api/menu");
    return {
      props: { Menus }
    }
  }