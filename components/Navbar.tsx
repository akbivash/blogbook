import Link from "next/link";
import React,{useContext, useEffect, useState} from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import styles from "@/styles/Home.module.css";
import {BsFillMoonFill, BsFillSunFill, BsMoon} from 'react-icons/bs'
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false)
  const[theme, setTheme] = useState('light')
const{data:session} = useSession()
  useEffect(() => {
    document.body.className = theme
  },[theme])

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  const handleTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
      // setIsDark(false)
    }
  }

  return (
    <div className="flex dark:text-gray-light  text-gray-500  items-center justify-between  max-w-[1400px] w-full    px-4  sm:px-8 text-xl">
      <Link href="/" className={styles.code}>
        Code<span className="text-teal-600">Blog</span>
      </Link>


<div className="flex items-center gap-4">
<span className="cursor-pointer text-2xl" onClick={handleTheme}>{theme === 'dark' ? <BsFillMoonFill/> :   <BsFillSunFill />}</span>
<div className="sm:hidden">
{!isMenuOpen ?  <AiOutlineMenu onClick={openMenu} className='text-xl cursor-pointer' /> : <RxCross1 onClick={closeMenu} className='text-xl cursor-pointer'/>}
  </div>  


      <div className="hidden sm:flex gap-4 md:gap-8 lg:px-10">
    <Link href="/blogs" onClick={() => closeMenu()}>Blogs</Link>
    {!session ?  <button onClick={() => signIn()}>Sign In</button> : <button onClick={() => signOut()}>Sign Out</button> }
     
      </div>
      </div>  
      {/* sidebar  */}
     
  <div className={`${isMenuOpen ? "fixed dark:text-gray-light dark:bg-dark-dark top-16 grid place-content-center gap-10 transition-all duration-300 bg-gray-100 py-4 text-center w-full max-w-[300px] right-0":"fixed transition-all duration-300 top-16 right-[-50%] grid place-content-center gap-10"}`}>
    <Link href="/blogs" onClick={() => closeMenu()}>Blogs</Link>
    {!session ?  <button onClick={() => signIn()}>Sign In</button> : <button onClick={() => signOut()}>Sign Out</button> }

   
  </div>


    </div>
  );
};

export default Navbar;
