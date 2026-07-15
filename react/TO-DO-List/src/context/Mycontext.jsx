import { createContext, useState } from "react";

export let Myshop=createContext()//consumer
//provider
export let Myprovider=({children})=>{
    let [taskdata,setTaskdata]=useState(JSON.parse(localStorage.getItem("data"))||[]);
    let[toogle,setToogle]=useState(true);
    let [pending,setPending]=useState(JSON.parse(localStorage.getItem("pending"))||[]);
    let [tasktoogle,setTasktoogle]=useState(true);
    
    

    return (<Myshop.Provider value={{taskdata,setTaskdata,toogle,setToogle,tasktoogle,setTasktoogle,pending,setPending}}>{children}</Myshop.Provider>)
}