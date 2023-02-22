import Link from "next/link";
import React,{useState} from "react";
import { HiOutlineSearch } from "react-icons/hi";
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)

  }
  return (
    <div className="flex z-40 bg-gray-200 items-center justify-between fixed max-w-[1400px] w-full    px-4 py-3 sm:px-8 border-b-gray-200 border-b-2 text-xl">
      <Link href="/" className={styles.code}>
        serial<span className="text-teal-600">Coder</span>
      </Link>


<div className="sm:hidden">
{!isMenuOpen ?  <AiOutlineMenu onClick={openMenu} className='text-xl cursor-pointer' /> : <RxCross1 onClick={closeMenu} className='text-xl cursor-pointer'/>}
  </div>    

      <div className="hidden font-thin sm:flex gap-4 md:gap-8 lg:px-10">
        <Link href="/learn">Learn</Link>
        <Link href="/exercises">Exercises</Link>
        <Link href="/signup">Sign in</Link>
      </div>
    </div>
  );
};

export default Navbar;
