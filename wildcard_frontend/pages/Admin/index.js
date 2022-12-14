import { useRouter } from 'next/router'
import Layout from "../../Component/layout";
import Link from "next/link";
import Auth from '../../Hooks/Auth'
export default function AdminOnlyPage() {
    Auth()
    return(
        <Layout>
            <h1>Main Menus</h1>
            <Link className="btn btn-primary btn-lg m-2" href="Admin/Menus">
                Menus
            </Link>
            <Link className="btn btn-primary btn-lg m-2" href="Admin/Polls">
                Polls
            </Link>
        </Layout>
    )
}