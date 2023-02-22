import Head from 'next/head'
import Navbar from '@/components/Navbar'
import {FaGraduationCap} from 'react-icons/fa'
import Link from 'next/link'
import Homepage from '@/components/Homepage'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>serialCoder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
  <Homepage/>
    <Footer/>
 
    </>
  )
}
