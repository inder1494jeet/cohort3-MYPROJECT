import React, { useState } from 'react'
import Nav from './components/Nav'
import Value from './components/Value'
const App = () => {
  let [val,setVal]=useState([])
  // console.log(val)
  return (
    <div >
      <Nav val={val} setVal={setVal}/>
      
    </div>
  )
}

export default App
