import React from 'react'
import { useForm } from 'react-hook-form';
const Form = ({setVal ,showForm}) => {
    const{register,handleSubmit,formState:{errors},reset}=useForm( {mode:"onchange"})
    let formdet=(data)=>{
        // console.log(data)
        setVal(prev=>[...prev,data])
        reset();    
        showForm(false)
    }
  return (
   <div className=' fixed inset-0 z-50 w-full h-full bg-black/30 flex justify-center items-center'>
     <div className='w-80 flex justify-center items-center bg-gray-200 gap-4  '>
        
      <form  onSubmit={handleSubmit(formdet)} className='flex flex-col gap-4 p-4 w-full' >
        <h1 className='text-2xl font-bold'>Fill Form</h1>
        <input type="text" className='border border-1 p-2'{...register("text",{required:"plz enter value"})} placeholder='enter your task name'/>
        {errors.text && <p className='text-red-500'>{errors.text.message}</p>}
        <input type="text" className='border border-1 p-2'{...register("description",{required:"plz enter description"})} placeholder='enter you task description' />
        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
        <button className='p-2 bg-blue-500 text-white rounded-xl'>Create</button>
      </form>
    </div>
   </div>
  )
}

export default Form
