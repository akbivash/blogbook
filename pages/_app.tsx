import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
export default function App({ Component, pageProps }: AppProps) {
  return <>
<div className=' flex justify-center font-roboto'>
<Navbar/>
</div>
<div className='pt-16 font-sans max-w-[1400px] mx-auto'>
<Component {...pageProps} />
</div>
  </>
}
