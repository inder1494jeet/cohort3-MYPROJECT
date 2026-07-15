import React, { useContext } from 'react'
import Task from './Task'
import { Myshop } from '../context/Mycontext'
const Todo = () => {
    let {taskdata}=useContext(Myshop)
  return (
    <div className='flex flex-col items-center w-full gap-4' >
     
      {taskdata.map((elem,index)=>{
        return <Task key={index} t={elem}/>
        // console.log(elem.task)   
      })}
    </div>
  )
}

export default Todo
