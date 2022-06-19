import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Page index at /</h1>
    </div>
  )
}

// @ts-ignore
Home.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>
}

export default Home
