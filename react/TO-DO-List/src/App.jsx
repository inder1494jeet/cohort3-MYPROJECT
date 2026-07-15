import React, { useContext, useState } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Todo from './components/Todo';
import { Myshop } from './context/Mycontext';
import Pending from './components/Pending';

const App = () => {
  // let data=JSON.parse(localStorage.getItem('data'))||[];
  let{taskdata,toogle,tasktoogle,setTasktoogle}=useContext(Myshop);
  
  return (
    <div className='bg-[#F5F5F5] p-[1rem] min-h-screen flex flex-col gap-3'>
      <Nav/>
      {toogle? <div className='flex flex-1 justify-center'>
        {tasktoogle?taskdata.length===0?(
        <div className="flex items-center justify-center h-40">
          <h2 className="text-xl font-semibold text-gray-500">
            No  Tasks Added 
          </h2>
        </div>
      ):(<div className='flex flex-1 justify-center'><Todo/></div>):<div className='flex flex-1 justify-center'><Pending/></div>}
        </div>:<Form/>}
      
    </div>
  )
}

export default App
