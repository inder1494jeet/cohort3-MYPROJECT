import React from 'react'

const Register = ({setChange}) => {
    let formsubmit=(e)=>{
        e.preventDefault();
        setChange((prev)=> !prev )
    }
  return (
    <div className='h-[300px] w-[400px] bg-white rounded-xl '>
      <form action="" className='flex flex-col gap-4 h-full w-full justify-center p-2' onSubmit={formsubmit}>
        <input required type="text" placeholder='enter your image' className='border-2 p-2 rounded ' />
        <input required type="text" placeholder='enter your name' className='border-2 p-2 rounded ' />
        <input required type="email" placeholder='enter your email' className='border-2 p-2 rounded ' />
        <button className='bg-blue-700 p-2 rounded text-white' >Submit</button>
      </form>
    </div>
  )
}

export default Register
