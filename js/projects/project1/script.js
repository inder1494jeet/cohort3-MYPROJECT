let inp=document.querySelector("input");
let btn=document.querySelector("#enter");
let main=document.querySelector("main")
inp.addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
    {
        btn.click()
    }
})
btn.addEventListener("click",()=>{
        let out=inp.value;
        if(out.trim()==="")
        {
            inp.value="";
             return;
        }
           
        let down=document.createElement("div")
        down.classList.add("down");
        let text=document.createElement("div")
        text.classList.add("text")
        text.textContent=out;
        text.addEventListener("click",()=>{
            edit.click()
        })
        let butt=document.createElement("div")
        butt.classList.add("btn")
        let edit=document.createElement("button")
        edit.classList.add("edit")
        edit.textContent="Edit"
        edit.addEventListener("click",()=>{
           let value= prompt("enter the changed value");
           text.textContent=value;
        })
         let del=document.createElement("button")
        del.classList.add("del")
        del.textContent="Delete"
        del.addEventListener("click",()=>{
            main.removeChild(down);
        })

       
        down.append(text,butt)
        butt.append(edit,del);
         main.appendChild(down)
         inp.value="";

})
