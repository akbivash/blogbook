import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid gap-2 pt-10 text-gray-500 sm:flex  justify-around pb-5'>
        <span className='flex justify-center '>
            Copyright @2023 SerialCoder
        </span>
        <div className='flex flex-wrap justify-center gap-2 '>
            <Link href=''>Help</Link>
            <Link href=''>Terms</Link>
            <Link href=''>Privacy Policy</Link>
            <Link href='/jobs'>Jobs</Link>
     
        <span className='flex gap-2 ml-4 justify-center'>
            <img src="https://www.seekpng.com/png/detail/983-9831004_flag-of-nepal.png" className='w-5 h-5' alt="" />
            Nepal
        </span>
        </div>
    </div>
  )
}

export default Footer