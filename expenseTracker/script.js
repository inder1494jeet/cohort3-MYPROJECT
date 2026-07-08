let users= JSON.parse(localStorage.getItem("user")) || [];
let enteruser;
let totaltrans=JSON.parse(localStorage.getItem("trans")) || [];
const login =document.querySelector(".login")
const register =document.querySelector(".register")
const logbtn=document.querySelector(".loginbtn")
const regbtn=document.querySelector(".regbtn")
const uname=document.querySelector("#uname")
const pass=document.querySelector("#pass")
const reguname=document.querySelector("#username")
const regpass=document.querySelector("#password")
const makereg=document.querySelector(".regs")
const makelog=document.querySelector(".logs")
const main=document.querySelector(".main")
const addtask=document.querySelector(".add")
const overlay=document.querySelector(".overlay")
const close=document.querySelector(".close")
const logout=document.querySelector(".logout")
const name=document.querySelector(".n")
const form=document.querySelector("form")
const currbal=document.querySelector(".cbal")
const tinc=document.querySelector(".tinc")
const texp=document.querySelector(".texp")
const resetall=document.querySelector(".reset")
const setting=document.querySelector(".setting")
const settings=document.querySelector(".settings")
const settingchanges=document.querySelector(".settingchanges")
const changename=document.querySelector(".changename")
const currency=document.querySelector(".currency")
const mode = document.querySelector(".mode i");

const dashboard=document.querySelector(".dash")
const right=document.querySelector(".right")
// const tinc=document.querySelector(".tinc")
const ttrans=document.querySelector(".ttrans")
const t=document.querySelector("#type");
const r=document.querySelector(".r")
const ctx = document.getElementById("chart");
let curbal=JSON.parse(localStorage.getItem("curbal"))||0
let totalbal=JSON.parse(localStorage.getItem("totalbal"))||0
let totalexp=JSON.parse(localStorage.getItem("totalexp"))||0
// console.log(t.value)
// console.log(currbal.textContent)
let curr= localStorage.getItem("currency") || "$";
name.textContent = localStorage.getItem("username") || "Hello";
let myChart=new Chart(ctx,{
    type:"bar",
    data:{
        labels:["Income","Expense"],
       datasets:[{
        label:"Amount",
        data:[totalbal,totalexp],
          backgroundColor: [
                "#22c55e", // Green (Income)
                "#ef4444"  // Red (Expense)
            ],
             borderColor: [
                "#16a34a",
                "#dc2626"
            ],
            borderWidth: 2
       }] 
    }
})
let set=()=>{
    currbal.textContent=`${curr}${curbal.toFixed(2)}`
     tinc.textContent=`${curr}${totalbal.toFixed(2)}`
      ttrans.textContent=totaltrans.length
       texp.textContent=`${curr}${totalexp.toFixed(2)}`
}
set();

let theme = localStorage.getItem("theme") || "light";

if(theme==="dark"){
    document.body.classList.add("dark");
    mode.classList.remove("ri-sun-fill");
    mode.classList.add("ri-moon-fill");
}
totaltrans.forEach((e)=>{
    r.innerHTML=" "
    r.innerHTML+=`<div class="role">
                <p>${e.date}</p>
                <h4>${e.description}</h4>
                <p>${e.category}</p>
                <p>${e.amount}</p>
                <div class="actions">
                    <div class="edit">
                        <i class="ri-pencil-fill"></i>
                    </div>
                    <div class="remove">
                        <i class="ri-delete-bin-fill"></i>
                    </div>
                </div>
            </div>`
})
logbtn.addEventListener("click",()=>{
    if(uname.value.trim()==="" || pass.value.trim()==="")
    {
        alert("plz enter value");
        return
    }
    if(users.length===0)
    {
    
    alert("plz first register")
    uname.value=""
    pass.value=""
    login.style.display="none";
    register.style.display="flex"

    return;
    }
    let found=false;
    for(let a=0;a<users.length;a++)
    {
       if( users[a].username===uname.value && users[a].password===pass.value)
       {
        found=true;
        enteruser={uname:users[a].username,pass:users[a].password}
              login.style.display="none";
                uname.value=""
                 pass.value=""
                 name.textContent=localStorage.getItem("username") || enteruser.uname;;
            alert("congrotulation login succesfully");
            main.style.display="flex";
            break;
       }
    }
    if(!found)
    {
        alert("Invalid username or password");
    }




})
makereg.addEventListener("click",()=>{
    login.style.display="none";
    register.style.display="flex"

})
regbtn.addEventListener("click",()=>{
    if(reguname.value.trim()==="" || regpass.value.trim()==="")
    {
        alert("plz enter value");
        return;
    }
    let ans={
        username:reguname.value,password:regpass.value
    }
    users.push(ans);
    localStorage.setItem("user",JSON.stringify(users));
   uname.value=""
   pass.value=""
   reguname.value=""
   regpass.value=""
    register.style.display="none"
     login.style.display="flex";
})
makelog.addEventListener("click",()=>{
      register.style.display="none"
     login.style.display="flex";
})
addtask.addEventListener("click",()=>{
    overlay.style.display="flex";
    close.addEventListener("click",()=>{
        overlay.style.display="none";
    })
})
logout.addEventListener("click",()=>{
    main.style.display="none";
    login.style.display="flex";
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let type=e.target.type.value
    let description=e.target.desc.value
      let amount=e.target.amount.value
        let date=e.target.number.value
          let category=e.target.category.value
          let userans={
            type,description,amount,date,category
          }
          totaltrans.push(userans)
          localStorage.setItem("trans",JSON.stringify(totaltrans));
          console.log(userans)
          if(type==="Income")
          {
           let balance=curbal
           balance+=Number(amount);
           curbal+=Number(amount)
           localStorage.setItem("curbal",balance);
           currbal.textContent=`${curr}${curbal.toFixed(2)}`
           balance=totalbal
           balance+=Number(amount);
           totalbal+=Number(amount)
            localStorage.setItem("totalbal",balance);
           tinc.textContent=`${curr}${totalbal.toFixed(2)}`
           
          }
          else{
               let balance=curbal
           balance-=Number(amount);
           curbal-=Number(amount)
           localStorage.setItem("curbal",balance);
              currbal.textContent=`${curr}${curbal.toFixed(2)}`
              balance=totalexp
              balance+=Number(amount);
              totalexp+=Number(amount);
              localStorage.setItem("totalexp",balance);
                  texp.textContent=`${curr}${totalexp.toFixed(2)}`
          }
          ttrans.textContent=totaltrans.length
          myChart.data.datasets[0].data = [totalbal, totalexp];
          myChart.update();
          totaltrans.forEach((e)=>{
    r.innerHTML+=`<div class="role">
                <p>${e.date}</p>
                <h4>${e.description}</h4>
                <p>${e.category}</p>
                <p>${e.amount}</p>
                <div class="actions">
                    <div class="edit">
                        <i class="ri-pencil-fill"></i>
                    </div>
                    <div class="remove">
                        <i class="ri-delete-bin-fill"></i>
                    </div>
                </div>
            </div>`
})
          form.reset();
           overlay.style.display="none";

})
resetall.addEventListener("click",()=>{
    alert("confirm it will delete all data")
    localStorage.clear();
    totaltrans=[];
    let v=0
    currbal.textContent=`$${v}`
    tinc.textContent=`$${v}`
    texp.textContent=`$${v}`
    ttrans.textContent=`$${v}`
    r.innerHTML=""
    myChart.data.datasets[0].data = [0, 0];
    myChart.update();

})

t.addEventListener("change",()=>{
    console.log(t.value)
    if(t.value==="all")
    {
        r.innerHTML=""
        totaltrans.forEach((e)=>{
            console.log(e)
            r.innerHTML+=`     <div class="role">
                <p>${e.date}</p>
                <h4>${e.description}</h4>
                <p>${e.category}</p>
                <p>${e.amount}</p>
                <div class="actions">
                    <div class="edit">
                        <i class="ri-pencil-fill"></i>
                    </div>
                    <div class="remove">
                        <i class="ri-delete-bin-fill"></i>
                    </div>
                </div>
            </div>`

        })
    }
    else if(t.value==="income")
    {
        let inc= totaltrans.filter((elem)=>{
            // return elem.category=="income"
            return elem.type==="Income";
        })
        console.log(inc)
        r.innerHTML=""
        inc.forEach((e)=>{
            r.innerHTML+=`<div class="role">
                <p>${e.date}</p>
                <h4>${e.description}</h4>
                <p>${e.category}</p>
                <p>${e.amount}</p>
                <div class="actions">
                    <div class="edit">
                        <i class="ri-pencil-fill"></i>
                    </div>
                    <div class="remove">
                        <i class="ri-delete-bin-fill"></i>
                    </div>
                </div>
            </div>`
        })
    }
    else{
        let inc=totaltrans.filter((elem)=>{
            return elem.type==="Expense"
        })
        console.log(inc)
        r.innerHTML=""
        inc.forEach((e)=>{
            r.innerHTML+=`<div class="role">
                <p>${e.date}</p>
                <h4>${e.description}</h4>
                <p>${e.category}</p>
                <p>${e.amount}</p>
                <div class="actions">
                    <div class="edit">
                        <i class="ri-pencil-fill"></i>
                    </div>
                    <div class="remove">
                        <i class="ri-delete-bin-fill"></i>
                    </div>
                </div>
            </div>`
        })
    }
    // console.log("eventfired")
})
setting.addEventListener("click",()=>{
    dashboard.style.backgroundColor="transparent"
    setting.style.backgroundColor="#DBEAFE"
    right.style.display="none"
    settings.style.display="flex"
       if(theme==="dark")
     {
    //      dashboard.style.color="black"
    // setting.style.color="black"
      setting.style.backgroundColor="#334155"
     }
})
dashboard.addEventListener("click",()=>{
    dashboard.style.backgroundColor="#DBEAFE"
    setting.style.backgroundColor="transparent"
    right.style.display="block"
     settings.style.display="none"
     if(theme==="dark")
     {
    //      dashboard.style.color="black"
    // setting.style.color="black"
    dashboard.style.backgroundColor="#334155"
     }
})
settingchanges.addEventListener("click",()=>{
   
    name.textContent=changename.value
    curr=currency.value
    localStorage.setItem("currency", curr);
    localStorage.setItem("username", changename.value);
    set();
    alert("changes saved")
})
mode.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark"))
    {
        mode.classList.remove("ri-sun-fill");
        mode.classList.add("ri-moon-fill");
        localStorage.setItem("theme","dark");
    }
    else
    {
        mode.classList.remove("ri-moon-fill");
        mode.classList.add("ri-sun-fill");
        localStorage.setItem("theme","light");
    }

})





