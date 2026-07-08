import { useState } from "react";
import Container from "./Container"
let App=()=>{

  const [teamMember,setTeamMember] = useState([
  {
    id: 1,
    name: "Aarav Sharma",
    designation: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    designation: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    designation: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    designation: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 5,
    name: "Aditya Singh",
    designation: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 6,
    name: "Neha Gupta",
    designation: "Digital Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
]);
const name="hello"
let del=(id)=>{
  const newdata=teamMember.filter((elem)=>{
    return elem.id !== id
  })
  setTeamMember(newdata)

}


  return <div className="flex  justify-center flex-col items-center">
    <h1 className="text-5xl font-bold text-red-500" >Card Reader</h1>
   <div className="flex gap-2">
     {teamMember.map((elem,index)=>{
      // {console.log(elem)}
      return <Container  key={index} prop={elem} fnc={del}/> 
     })}
   </div>
  </div>
}
export default App