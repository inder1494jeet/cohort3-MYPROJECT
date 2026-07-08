    import React from 'react'
    import Form from './Form'
    import Value from './Value'
    import { useState } from 'react'
    const Nav = ({setVal,val}) => {
        let [form,showForm]=useState(false)
        let [set,setSet]=useState(false)
        
    return (
        <div className='p-[2rem] flex flex-col gap-[2rem]  w-screen h-screen'>
        <div className='flex justify-between items-center '>
            <div className='text-2xl font-bold'>Todo List</div>
        <button  className="px-5 py-1 border border-2 rounded-xl bg-yellow-600 text-white text-lg flex justify-center items-center cursor-pointer" onClick={()=>showForm(true)}>Create </button>
        </div>
        { form && <Form setVal={setVal} showForm={showForm}/>}
            <div className='p-2 flex flex-1 flex-col  gap-2 items-center'>
            {val.map((e,index)=>{
            return <Value data={e} index={index} setVal={setVal}/>
        })}
        </div>
        </div>
    
    )
    }

    export default Nav
