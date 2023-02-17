import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import App from './App'


const Home: NextPage = () => {
  return (
    <div className="min-w-full max-h-screen overflow-hidden ">
      <Head>
        <title>whatsUp</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

     <App/>
    </div>
  )
}

export default Home
