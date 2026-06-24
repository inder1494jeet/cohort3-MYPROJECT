let child=document.querySelectorAll(".child");
let parent=document.querySelector(".parent")
let text=document.querySelector(".text")
let message=document.querySelector(".message")
let target="X";
let timer=document.querySelector(".ti")
const winpatter=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let restartgame=()=>{
    child.forEach((e)=>
    {

        e.textContent=""
        e.style.backgroundColor="rgb(20, 18, 18)";
        message.style.display="none";
    })
    target="X";
}
let tie=()=>{
      const isboard=[...child].every((cell)=>{
        return cell.textContent!==""
       })
       if(isboard===true)
       {
        message.style.display="flex"
        text.textContent="TIEE"
        text.style.color="red"
           let val=3;
         timer.textContent=""
         let clear= setInterval(()=>{
            timer.textContent=val;
            val--;
            if(val===0)
            {
                clearInterval(clear)
            }
          },1000)
         setTimeout(()=>{
        restartgame();
       },4000)
       }
}
function checkwinner(){
    let ba=false;
    for (p of winpatter){
        // console.log(e)
       const [a,b,c]=p;
       const v1=child[a].textContent;
       const v2=child[b].textContent;
       const v3=child[c].textContent;
       if(v1!=="" && v1===v2 && v2===v3)
       {
        // console.log(v1+"wins")
        ba=true;
        message.style.display="flex";
        text.textContent=`${v1} WINS`
        text.style.color="green"
        child[a].style.backgroundColor="green";
         child[b].style.backgroundColor="green";
          child[c].style.backgroundColor="green";
             let val=3;
         timer.textContent=""
         let clear= setInterval(()=>{
            timer.textContent=val;
            val--;
            if(val===0)
            {
                clearInterval(clear)
            }
          },1000)
        //   tie();
        setTimeout(()=>{
        restartgame();
       },4000)
       
       }
      
       
    }
  return ba;
}
parent.addEventListener("click",(e)=>{
    if(e.target.textContent!=="")
    {
        return;
    }
    else{
        e.target.textContent=target;
        if(target==='X')
        {
            target="O";
        }
        else{
            target='X'
        }
    }
    let b=checkwinner()
    if(b!==true)
    {
        tie();
    }
})