import React, { useState } from 'react'
import Nav from './components/nav'
// import { Form } from 'react-hook-form'
import Form from './components/Form'
import Usercard from './components/Usercard'
const App = () => {
  let [toogle,setToogle]=useState(false);
  let [users,setUsers]=useState(JSON.parse(localStorage.getItem('users'))|| [])
  let [updateinfo , setUpdateinfo]=useState(null)
  // let [deluser ,setDeluser]=useState()
  
  let Deluser=(id)=>{
      let userdel=users.filter((e)=>{
        return e.id!==id;
      })
      // console.log(userdel)
      setUsers(userdel);
      localStorage.setItem("users",JSON.stringify(userdel));
  }
  return (
    <div className='h-screen w-screeen p-2 flex flex-col gap-[2rem]'>
     
      <Nav setToogle={setToogle}/>
      {toogle?  <Form users={users} setUsers={setUsers} setToogle={setToogle} updateinfo={updateinfo}/> :(<div className='flex flex-wrap gap-2'>
        {users.map((data)=>{
          return <Usercard data={data} key={data.id}  Deluser={Deluser} setToogle={setToogle} setUpdateinfo={setUpdateinfo}/>
        })}
      </div>)
      }
    </div>
  )
}

export default App
