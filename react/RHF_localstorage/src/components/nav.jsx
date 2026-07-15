import React from 'react'

const nav = ({setToogle}) => {
  return (
    <div className='flex justify-between p-[1rem] items center bg-black text-white rounded'>
      <h1 className='text-xl'>user</h1>
      <button className='border border-2 px-2 py-1  rounded cursor-pointer ' onClick={()=>{
        setToogle((prev)=> !prev)
      }}>Create User</button>
    </div>
  )
}

export default nav
