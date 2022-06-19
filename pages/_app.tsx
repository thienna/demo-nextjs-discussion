import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useCallback, useEffect, useState} from "react";
import LoginPage from './login'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)

  const checkLogin = useCallback(() => {
    setTimeout(() => setIsLoggedIn(true), 1000)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || isLoggedIn === true) {
      return
    }

    checkLogin()
  }, [checkLogin, isLoggedIn])

  // @ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page)

  const renderPage = () => {
    if (isLoggedIn === null) {
      if (typeof window !== 'undefined') {
        // CSR
        console.log('CSR')
        return null
      }
      // SSR
      console.log('SSR')
      return <LoginPage />
    }
    return isLoggedIn ? (<>{getLayout(<Component {...pageProps} />)}</>) : <LoginPage />
  }
  return renderPage()
}

export default MyApp
