import React from "react";

const Value = ({ data ,index,setVal}) => {
  return (
    <div className="w-[70%] bg-white rounded-xl shadow-md border p-4 flex justify-between items-start hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-800">
          {data.text}
        </h1>

        <p className="text-gray-500">
          {data.description}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Update
        </button>

        <button
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          onClick={
            (e)=>{
                let ind=index;
                setVal(prev=>{
                  return  prev.filter((e,i)=>  i!==ind   )
                })
            }
          } 
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Value;