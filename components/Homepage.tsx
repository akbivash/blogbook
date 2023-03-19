import { AuthContext } from '@/context/AuthContext'
import Link from 'next/link'
// import React from 'react'
import { FaHandPointLeft } from 'react-icons/fa'
import {useContext} from 'react'


const Homepage = () => {
    const{isLoggedIn} = useContext(AuthContext)
  return  <>
    <div className='flex justify-around py-10 md:px-3 md:py-18'>
    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190813181110/7-Tips-and-Tricks-to-Learn-Programming-Faster.png" alt=""  className='lg:block hidden w-full rounded-md -rotate-3 max-w-[500px] h-[300px]' />
    <div className='grid  gap-3 text-center p-2 '>
     <h2 className='text-5xl font-bold  bg-clip-text bg-gradient-to-r text-transparent from-teal-500 to-lime-600 md:text-[4rem] tracking-wider lg:text-[5rem]'>Read, write <br />and connect</h2>
     <p className='my-2 dark:text-gray-200 text-gray-500 text-xl tracking-wide'>It is free to post your thinking, learn new things, and connect with peoples.</p>
     
{!isLoggedIn && <Link href='/user/signup' className='bg-teal-600 w-fit mx-auto px-4 py-2 rounded-sm text-white'>Create Account</Link> }
    </div>
   </div>
 
   <div className='grid   place-items-center md:flex   py-10 -order-1 px-4 '>
 <div className='md:order-1 w-40 lg:flex-1 max-w-[400px] lg:h-[300px] '>
 <img src="https://cdn-icons-png.flaticon.com/512/9746/9746243.png" className=' w-[80%]  object-cover' alt="" />
 </div>
     <div className='text-center flex-1 '>
      <span className='flex  gap-3 py-2 justify-center items-center text-teal-600 font-semi-bold text-2xl'>Start exploring <img src="https://cdn-icons-png.flaticon.com/512/471/471094.png" className='h-20 w-20 md:block hidden' alt="" /></span>
      <p className='py-4 dark:text-gray-default  w-[80%] mx-auto tracking-wide text-gray-500 text-md leading-[1.7rem]'>
      Explore the blogs written by different users across the world.  
      </p>
      <Link href='/blogs' className=' p-2 text-white mx-auto bg-teal-600 w-fit font-semi-bold  text-2xl flex justify-center gap-2 items-center'>Get Started <FaHandPointLeft/></Link>
     </div>
   </div>


   </>
  
}

export default Homepage