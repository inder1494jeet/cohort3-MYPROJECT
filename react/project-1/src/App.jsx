import React from "react";
// import About from "../../bebelcomponentpractice/src/About";
// import React from 'react'
import About from "./compo/About";
import Footer from "./compo/Footer";
import Nav from "./compo/Nav";
const App = () => {
  console.log(React)
  return (
    <div>
      <Nav/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
