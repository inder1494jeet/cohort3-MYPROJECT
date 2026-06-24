const addtask=document.querySelector(".addtask")
const main=document.querySelector("main")
const formbox=document.querySelector(".form")
let f =document.querySelector("form")
let taskbox=document.querySelector(".task-box")
// let task=document.querySelector(".task")
let theme=document.querySelector(".b")
let userdata=JSON.parse(localStorage.getItem("data")) || [];
let val= JSON.parse(localStorage.getItem("theme"))||{}
let t; 
// console.log(localStorage.getItem("theme"))
// window.addEventListener("mouseover",)
// window.innerHTML="black"
        
        theme.style.backgroundColor=val.theme
        document.querySelector("body").style.backgroundColor=val.body;
        taskbox.style.backgroundColor=val.taskbox
theme.addEventListener("click",(e)=>{
        // theme.style.backgroundColor="blue"
    if(t==="black")
    {
        t="light";
        theme.style.backgroundColor="white"
        document.querySelector("body").style.backgroundColor="black";
        taskbox.style.backgroundColor="rgb(38, 37, 37)"
        // task.style.boxShadow="none"
         val={
            theme:"white",
            body:"black",
            taskbox:"rgb(38, 37, 37)",
        

        }
        localStorage.setItem("theme",JSON.stringify(val) );
        // console.log(localStorage.getItem("theme"));
}
else{
    t="black";
        theme.style.backgroundColor="black"
        document.querySelector("body").style.backgroundColor="whitesmoke";
        taskbox.style.backgroundColor="white"
        // task.style.boxShadow="none"
          val={
            theme:"black",
            body:"whitesmoke",
            taskbox:"white",
        

        }
        localStorage.setItem("theme",JSON.stringify(val));
}
})

let upval=null;
addtask.addEventListener("click",()=>{
    formbox.style.display="flex"
   
})
let ui=()=>{
    taskbox.innerHTML="";
   userdata.forEach((elem,idx)=>{
    let color;
    if(elem.compans==="Completed")
    {
        color="rgb(26, 242, 26)"
    }
    else{
        color="rgb(255, 133, 3)"
    }
     taskbox.innerHTML+=`  <div class="task">
                <div class="text">
                    <h1>${elem.text}</h1>
                    <div class="radio">
                     <h3 style="color:${color};">${elem.compans}</h3>
                    </div>
                </div>
                <div class="btn">
                    <button style="background-color: goldenrod;" onclick=update(${idx})>Edit</button>
                    <button style="background-color: darkred;" onclick=del(${idx})>Delete</button>
                </div>
            </div>`
   })
}
let del=(idx)=>{
    userdata.splice(idx,1)
    localStorage.setItem("data",JSON.stringify(userdata));
    ui();
}
let update=(idx)=>{
    upval=idx;
    formbox.style.display="flex";
    f[2].innerHTML="Update"
    f[0].value=userdata[idx].text;
    f[1].value=userdata[idx].compans;

}
ui();
f.addEventListener("submit",(e)=>{
    // form.reset();
    
    e.preventDefault();
    let text=e.target[0].value;
    if(text.trim()==="")
    {
        alert("enter text")
        return;
    }
    let completed=e.target[1].value.toLowerCase();
    let compans;
    if(completed==="completed")
    {
        compans="Completed"
    }
    else if(completed==="pending")
    {
        compans="Pending"
    }
    else{
        alert(`plz enter right value
        if Completed then right completed
        if Pending then right pending`)
        return;
    }
    let obj={
        text,compans
    }
    if(upval!==null)
    {
        f[2].innerHTML="Submit"
        userdata[upval]=obj
        upval=null;
        localStorage.setItem("data",JSON.stringify(userdata));
    }
    else{
         userdata.push(obj);
         localStorage.setItem("data",JSON.stringify(userdata))
    }
   
    
    ui();
    formbox.style.display="none";
    f.reset()
   
})

