import React, { useState } from 'react'
import Register from './component/Register'
import Card from './component/card'

const App = () => {
    const[change,setChange]=useState(true)
    
  return (
    <div className='bg-gray-300 h-screen flex justify-center items-center' >
      {change ? <Register setChange={setChange}/> : <Card setChange={setChange}/>}
   </div>
  )
}

export default App
