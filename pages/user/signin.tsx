import { NextPage } from 'next'
import React, { FormEvent, useContext } from 'react'
import {useState} from 'react';
import { AuthContext } from '../../context/AuthContext';

const SignIn: NextPage= (props):JSX.Element => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
const{errorMsg, isLoading, signIn} = useContext(AuthContext)

 async function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
signIn(email,password)
  }
  return (
    <div>
      <form  className='grid gap-4 place-items-center py-20' onSubmit={handleSubmit}>
       {errorMsg && <span className='text-red-500'>{errorMsg}</span>}
       
        <div className="form_control">
          <label htmlFor="">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form_control">
          <label htmlFor="">Password</label>
          <input 
          type='password'
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
           required />
        </div>
        <div className="form_control">
          <input type="submit" value='submit' className='cursor-pointer w-fit mx-auto bg-green-300 disabled:opacity-[0.5]' disabled={isLoading} />
        </div>
      </form>
    </div>
  )
}

export default SignIn