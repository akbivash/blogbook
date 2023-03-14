import Navbar from '@/components/Navbar'
import { AuthContext, AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <>
<AuthProvider>
<div className=' flex justify-center dark:bg-dark-dark dark:border-dark-default z-40 fixed  left-0 top-0 w-full h-[10vh] border-b-gray-200 border-b-2 bg-gray-100  font-roboto'>
<Navbar/>
</div>
<div className='pt-16 dark:bg-dark-dark min-h-screen  font-sans max-w-[1400px] mx-auto'>
<Component {...pageProps} />
</div>
</AuthProvider>
  </>
}
