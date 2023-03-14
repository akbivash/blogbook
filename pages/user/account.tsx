import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';

const signout = () => {
  const[isModalOpen, setIsModalOpen] = useState(false)
  const{signOut,  isLoggedIn} = useContext(AuthContext)
 
console.log(isLoggedIn)

  return (
    <div className='py-20 text-center grid place-items-center gap-5 '>
<Link href='/' className='bg-green-300 py-2 px-7 rounded-sm'>Home</Link>
    {isLoggedIn ?   <button className='bg-red-500 py-2 px-7 text-white' onClick={() => setIsModalOpen(true)}>Signout</button> : <Link href='/user/signup' className='bg-green-500 rounded-sm px-7 py-2'>Sign in</Link>}
     {isModalOpen &&  <div className='grid gap-4 place-items-center py-10'>
        <h2 className='dark:text-white'>Are you sure</h2>
        <span className='flex gap-3'><button className='bg-red-500 py-2 px-7 text-white rounded-sm' onClick={signOut}>Yes</button><button  className='bg-green-500 rounded-sm px-7 py-2' onClick={() => setIsModalOpen(false)}>No</button></span>
      </div>}
    </div>
  )
}

export default signout