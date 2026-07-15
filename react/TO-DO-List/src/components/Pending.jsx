import React, { useContext } from 'react'
import PendingTask from './pendingtask'
import { Myshop } from '../context/Mycontext'
const Pending = () => {
    let{pending}=useContext(Myshop)
    console.log(pending)
  return (
      <div className='w-full'>
      {pending.length===0? (
        <div className="flex items-center justify-center h-40">
          <h2 className="text-xl font-semibold text-gray-500">
            No Pending Tasks 🎉
          </h2>
        </div>
      ):(pending.map((elem)=>{
        return<PendingTask key={elem.id} ptask={elem}/>
      }))}
      
    </div>
  )
}

export default Pending
