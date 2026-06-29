import About from "./About"
import React from "react";
let App=(props)=>{
  console.log(props)
  let h1=React.createElement("div",{className:"hello"},"hello kyaa baat h")
  return (<main>
    {h1}
    <div>
      <h1>hello i am h1 under main and div</h1>
    </div>
    <About name="inderjeet" role="webDeveloper"/>
  </main>);
}
export default App
