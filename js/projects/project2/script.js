let create=document.querySelector(".createbtn")
let formselect=document.querySelector(".form")
let main=document.querySelector("main")
let form=document.querySelector("form")
let users=document.querySelector(".users")
let values=[];
let idx=null;
// let usercard=document.querySelector(".usercard")
// let bt=document.querySelector(".bt")
create.addEventListener("click",()=>{
    formselect.style.display="flex";
    formselect.style.pointerEvents="fill"
})

// formselect.addEventListener("click",()=>{
//     formselect.style.display="none";
//     formselect.style.pointerEvents="none"
// })


let ui=()=>{
    users.innerHTML=""

    values.forEach((elem,idx)=>{
        users.innerHTML+=`   <div class="usercard">
                <div class="img">
                    <img src="${elem.image}" alt="">
                </div>
                <div class="text">
                   <div>Name:-${elem.name}   </div>
                     <div> Email:-${elem.text}</div>
                </div>
                <div class="bt">
                    <button class="edit" onclick="update(${idx})">Edit</button>
                    <button class="delete" onclick="del(${idx})">Delete</button>
                </div>
            </div>`
    })
}
update=(elem)=>{
    console.log("hello")
    idx=elem;
    formselect.style.display="flex"
    form[0].value=values[elem].name;
    form[1].value=values[elem].text;
    form[2].value=values[elem].image;

}
del=(idx)=>{
    console.log("hello")
    values.splice(idx,1);
    ui();
}
form.addEventListener("submit",(elem)=>{
    
    // console.log(elem)
    elem.preventDefault();
    let name=elem.target[0].value;
     let text=elem.target[1].value;
      let image=elem.target[2].value;
      if(name.trim()===""|| text.trim()==="" || image.trim()==="")
      {
        alert("plz enter value");
        return;
      }
      let obj={name,text,image}
      if(idx!==null)
      {
        values[idx]=obj;
        idx=null
      }
      else{
        values.push(obj);
      }
      
    //   console.log(values)
    //   console.log(name,text,image)
    ui();
    form.reset()
    formselect.style.display="none"
})
