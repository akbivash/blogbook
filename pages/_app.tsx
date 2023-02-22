import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
<div className=' flex justify-center'>
<Navbar/>
</div>
<div className='pt-16 max-w-[1400px] mx-auto'>
<Component {...pageProps} />
</div>
  </>
}
