import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from "../layouts/MainLayout";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <h1>Page home at /</h1>
            <div onClick={ async () => {
                document.cookie = 'logged_in=; expires=Thu, 01 Jan 1970 00:00:00 GMT;'
                await router.replace(router.asPath)
            }}>click to logout</div>
        </div>
    )
}

// @ts-ignore

Home.getLayout = function getLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}

export default Home
