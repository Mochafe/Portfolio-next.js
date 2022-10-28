import '../styles/globals.css'
import Navbar from "../components/navbar"
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Florian Pasquet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='ml-32 mr-3 pt-3'>
        <Component {...pageProps} />
      </div>
      
    </div>
  )
}

export default MyApp