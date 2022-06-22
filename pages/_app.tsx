import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useCallback, useEffect, useState} from "react";
import LoginPage from './login'

const isClient = () =>
    typeof window !== "undefined" && typeof document !== "undefined";

const Pending = "pending";
const LoggedIn = "loggedin";
const LoggedOut = "loggedout";

type UserState = typeof Pending | typeof LoggedIn | typeof LoggedOut;

function MyApp({ Component, pageProps }: AppProps) {
  // const [loginState, setLoginState] = useState<UserState>(Pending);
  //
  // const checkLogin = useCallback(() => {
  //   setTimeout(() => setLoginState(LoggedIn), 1000);
  // }, []);
  //
  // useEffect(() => {
  //   if (loginState === LoggedIn) return;
  //
  //   checkLogin();
  // }, [checkLogin, loginState]);
  //
  // // @ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page);
  //
  // if (isClient()) {
  //   if (loginState === Pending) {
  //     return <div/> // I dont want to show page, just empty when checking login, return null will make it double render
  //   }
  //
  //   return loginState === LoggedIn ? (
  //       getLayout(<Component {...pageProps} />)
  //   ) : (
  //       <LoginPage />
  //   );
  // }
  // // Un-comment this to see the error, this case is for case google crawl bot on server-side only, Or do you have a better suggestion for this SEO?
  // if (loginState === Pending) {
  //   // here,
  //   // the loginState on SSR is always Pending in this architecture, so I check if route is public then return layout public otherwise return login layout
  //   return <LoginPage/>
  // }
  return getLayout(<Component {...pageProps} />);
}

export default MyApp
