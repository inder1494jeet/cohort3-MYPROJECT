import React from 'react'

const App = () => {
  let count = 4
  console.log(count)
  return (
    <div>
      <h1>count is :-{count}</h1>
      <button onClick={()=>{
        count++;
      }}>press button</button>
    </div>
  )
}

export default App
