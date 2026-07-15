import React, { useContext } from "react";
import { Myshop } from "./contextapi/Mywebsite";

const Users = ({data}) => {
  let{setCart}=useContext(Myshop)
  return (
    <div className="bg-white/90 rounded-2xl  shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer w-70 ">
      {/* Image */}
      <div className="relative h-50 bg-gray-200 ">
     

        <div className="h-full  w-full flex items-center justify-center text-gray-400">
          <img  className=" h-full w-full object-cover"  src={data.image} alt="" />
        </div>
      </div>

      {/* Content */}
      <div className="p-2">
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          {data.category}
        </span>

        <h2 className="text-xl font-bold text-gray-800 mt-3">
          {data.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
         {data.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-blue-600">{data.price}</span>

          
        </div>

        <button onClick={()=>{
          alert(`item added-: ${data.title}`)

            setCart((prev)=>
              {
                let val=prev.find((elem)=>{
                    return elem.id===data.id;
                })
                if(val)
                {
                  return prev.map((elem)=>{
                    if(elem.id==val.id)
                    {
                     return {
                      ...elem,quantity:elem.quantity+1
                     }
                    }
                    return elem;
                  })
                  
                }
                else{
                  return [...prev,{...data}]
                }
              })
        }} className="w-full mt-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Users;