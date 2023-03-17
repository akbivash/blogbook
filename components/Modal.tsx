import { useGlobalContext } from '@/context/AppContext'
import React from 'react'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}
const Modal = ({children}:Props) => {
  return (
    <div className={`modal  fixed top-[50%] z-40 left-[50%]  translate-y-[-50%] translate-x-[-50%] bg-teal-600 p-4 rounded-sm text-white `}>
        {children}
    </div>
  )
}

export default Modal