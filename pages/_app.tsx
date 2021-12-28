import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('Calling App.tsx useEffect')
    /**
     * Call a function on every page refresh to check the user Type
     * Here we can check the token and if the user type and access token type is same we do:-
     * if(userType===currentUser){
     *      *Keep On same page
     * }
     * else{
     *    !Redirect to respective Page
     * }
     * otherwise we can either logout or push it to some other route
     */
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
