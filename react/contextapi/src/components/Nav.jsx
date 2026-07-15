import React, { useContext } from 'react'
import { Myshop } from './contextapi/Mywebsite'

const Nav = () => {
  let{setToogle}=useContext(Myshop)
  return (
    <div className='bg-white/80 p-4 text-black flex items-center justify-between rounded-lg'>
        <h1 className='text-xl font-bold'>logo</h1>
        <div className='flex  gap-10 align-center'>
          <button className='cursor-pointer bg-white p-2 rounded-xl' onClick={()=>{
            setToogle(true)
          }}>Home</button>
          <button className='cursor-pointer bg-white p-2 rounded-xl'onClick={()=>{
            setToogle(false)
          }}>Cart</button>
        </div>
    </div>
  )
}

export default Nav
