import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({users,setUsers ,setToogle,updateinfo}) => {
    let {register,handleSubmit,formState:{errors},reset}=useForm({
      defaultValues:updateinfo,
    })
    let formsubmit=(data)=>{
            // console.log(e)
          if(updateinfo)
          {
            setUsers((prev)=>{
              return prev.map((val)=>{
                return val.id===updateinfo.id?{...data}:val;
              })
            })
          }
          else{
              let ans=[...users,{...data, id:nanoid()}]
            setUsers(ans);
            localStorage.setItem("users",JSON.stringify(ans));
          }
            
            reset();
            setToogle(prev=> !prev)
    }
  return (
    <div className='flex flex-col justify-center items-center'>
      <form  onSubmit={handleSubmit(formsubmit)} className='flex flex-col w-70 bg-gray-200 p-[1rem] gap-[2rem]' >
        <input {...register("name")} type="text" className='border border-1  px-2 py-1 rounded' placeholder='enter your name' />
        <input {...register("email")} type="email" className='border border-1 px-2 py-1 rounded ' placeholder='enter your email' />
        <input {...register("image")} type="url" className='border border-1 px-2 py-1 rounded ' placeholder='enter your image url' />
        <button className='bg-blue-700 text-white p-2 rounded'>Submit</button>

      </form>
    </div>
  )
}

export default Form
