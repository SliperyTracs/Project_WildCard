import Layout from "../../Component/layout";
import Link from "next/link"
export default function Admin(){
    return(
        <Layout>
            Main Menus
            <Link href="Admin/Menus">
                Menus
            </Link>
            <Link href="Admin/Polls">
                Polls
            </Link>
        </Layout>
    )
}