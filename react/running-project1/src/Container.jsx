// import React from 'react'

// const Container = ({teamMembers}) => {
//     console.log(teamMembers)
//   return (<div className='flex gap-2'>
//     {teamMembers.map((elem)=>{
//       return(<div className='border-2 w-40 h-40 flex flex-col items-center p-2'>
//         <div><img src={elem.image} alt="" className='w-10 h-10'/></div>
//         <div className='flex flex-col items-center'>
//           <h1>{elem.id}</h1>
//           <h1>{elem.name}</h1>
//           <h1>{elem.designation}</h1>
//         </div>
//       </div>)
    
//     })}
//   </div>)
  
// }

// export default Container
import React from 'react'

const Container = ({prop,fnc}) => {
  // console.log(prop)
  // let result=fnc(prop.id)
  return (
    <div className='flex flex-col border-2 h-50 w-40 items-center gap-1' >
      <div className='h-20 w-20'><img src={prop.image} alt="" /></div>
      <div className='flex flex-col items-center'>
           <h1>{prop.id}</h1>
        <h1>{prop.name.substring(0,6)}</h1>
        <h1 className='text-xs'>{prop.designation}</h1>
     
      </div>
      <div>
        
        <button  onClick={()=> fnc(prop.id)} className='bg-red-900 p-1 w-[4rem] rounded-lg'>delete</button>
      </div>
    </div>
  )
}

export default Container

