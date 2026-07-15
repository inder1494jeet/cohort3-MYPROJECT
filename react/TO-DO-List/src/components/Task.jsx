import React, { useContext } from "react";
import { Myshop } from "../context/Mycontext";
import { nanoid } from 'nanoid'
const Task = ({ t }) => {
    let{pending,setPending,taskdata,setTaskdata}=useContext(Myshop);
    let onPending=()=>{
        let a=pending.some((elem)=>{
            return elem.id===t.id
        })
        if(!a)
        {
            alert("task added to pending")
             let ans=[...pending,{...t,call:1}];
        setPending(ans);
        localStorage.setItem("pending",JSON.stringify(ans));
        }
        else{
            alert("the task is already added to pending")
        }
       
    }
    let onComplete=()=>{
        let pendingans=pending.filter((elem)=>{
            return elem.id!==t.id
        })
       let ans= taskdata.filter((elem)=>{
        return elem.id!==t.id
       })
       setTaskdata(ans)
       setPending(pendingans)
       localStorage.setItem("data",JSON.stringify(ans))
       localStorage.setItem("pending",JSON.stringify(pendingans))

    }
  return (
    <div className="w-[70%] rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Task Title */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>

          <h2 className="text-lg font-semibold text-gray-800">
           {t.task}
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onComplete}
            className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition"
          >
            ✓ Complete
          </button>

          <button
            onClick={onPending}
            className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white font-medium transition"
          >
            ✏️ Pending
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Task;