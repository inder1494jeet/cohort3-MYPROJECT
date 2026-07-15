import React from 'react'

const Usercard = ({data,Deluser,setToogle,setUpdateinfo}) => {
    console.log(data)
  return (
    <div className='w-60 border border-1 p-2 flex flex-col gap-2'>
      <div className="img w-full h-50">
        <img className='h-full w-full object-cover' src={data.image} alt="" />
      </div>
      <h1 className='text-xl font-bold'>{data.name}</h1>
      <h1 className='text-xs'>{data.email}</h1>
      <div className="button flex justify-between gap-1" >
        <button onClick={()=>{
          setUpdateinfo(data)
          setToogle((prev)=>!prev)
        }} className=' border border-2 px-[.8rem] py-1 rounded bg-yellow-600 text-white '>Edit</button>
        <button onClick={()=>{
          // setDeluser(data)
          Deluser(data.id)
        }} className=' border border-2 px-[.8rem] py-1 rounded  bg-red-900 text-white'>Delete</button>
      </div>
    </div>
  )
}

export default Usercard
