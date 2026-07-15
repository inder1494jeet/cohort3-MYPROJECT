import { createContext ,useState } from "react";

export let Myshop=createContext();
export let Myshopcust=({children})=>{
    let [toogle,setToogle]=useState(true);
    let [cart,setCart]=useState([])
    return(
    <Myshop.Provider value={{toogle,setToogle,cart,setCart}}>
        {children}
    </Myshop.Provider>)
}