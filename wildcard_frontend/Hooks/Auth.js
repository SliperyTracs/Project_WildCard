import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import styles from "../styles/Hooks/Auth.module.scss"
export default function Auth(){
    const { data: session, status } = useSession()
    const router = useRouter()
    if (status === "unauthenticated"){
        router.push("/login")
    }
    else if (status === "loading"){
        return(
            <div className={styles.container}>
            <div ClassName={styles.divider} aria-hidden="true"></div>
                <p ClassName={styles.loadingtext} aria-label="Loading">
                    <span ClassName={styles.letter} aria-hidden="true">L</span>
                    <span ClassName={styles.letter} aria-hidden="true">o</span>
                    <span ClassName={styles.letter} aria-hidden="true">a</span>
                    <span ClassName={styles.letter} aria-hidden="true">d</span>
                    <span ClassName={styles.letter} aria-hidden="true">i</span>
                    <span ClassName={styles.letter} aria-hidden="true">n</span>
                    <span ClassName={styles.letter} aria-hidden="true">g</span>
                </p>
            </div>
        )
    }
   console.log(session)
}