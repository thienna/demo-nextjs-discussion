import type {GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import {useRouter} from "next/router";

const Login: NextPage = () => {
    const [msg, setMsg] = useState('')
    const router = useRouter()
    return (
        <div className={styles.container} style={{background: 'green'}}>
            <h1>LOGIN PAGE</h1>
            <div onClick={() => {
                setTimeout(async () => {
                    setMsg('still in login page')
                    // @ts-ignore
                    document.cookie = 'logged_in=true'
                    await router.push('/')
                }, 2000)
            }}>click to login</div>
            <h3>{msg}</h3>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
        },
    }
}

export default Login
