// // console.log(age);
// // var anda=12;
// // hello(anda)
// // console.log(age)
// // console.log(b)
// // function hello(anda){
// //      console.log("hello");
// //      console.log(anda);
// // }
// // aka()
// // var aka=function(){
// //      console.log("puccha");
// // }
// "use strict"
// let age=12;
// let name="techyinder"

// console.log(`my name is  ${name}
//      and age is ${age}`)



     
// // const a=[1,2,3,4,5,60]
// // // Object.freeze(a);
// // // Object.seal(a)
// // // a["n"]="inder";
// // // a.push(12)
// // console.log(a)
// // a[0]=12;//why updating if want to stop
// // console.log(a[0])

// // var [ab,cs,ef,...re]=a;
// // console.log(re)
// // var an="inder";

// // var b=13;
// // // [b,an]=[an,b];
// // // console.log(`an is ${an}`)
// // // console.log(b)
// // var ob={
// //      name:"inder",
// //      age:13,
// //      course:"sheryians coding school",
// //      //method
// //      slogan(){
// //           var a="waheguru ji ka khalsa waheguru ji ki fateh";
// //           console.log(a)
// //      },
// //      w:["html","css","js","dsa"]
// }
// // Object.seal(ob)
// // ob.work="jaljfl";
// // console.log(ob.work)
// // ob.name="preetam"
// // console.log(ob.name);
// // var work={...ob};  //shallow copy
// //deep copy
// // var work=JSON.parse(JSON.stringify(ob));

// // console.log(work.name)
// // work.w.push("ml")
// // console.log(work.w)
// // console.log(ob.w)

// // function add()
// // {
// //      var a;
// //      function lexical()
// //      {
// //           a=50
// //            console.log(a);
// //      }
// //      return lexical
// // }
// // var out=add();
// // out()

// // clauser
// // function count()
// // {
// //      var c=0;
// //      return function()
// //      {
// //           c++;
// //           console.log(c)
// //           // console.log("hello")
// //      }
// // }
// // var val=count()
// // val()
// // val()
// // val()   


// //this in js
// console.log(this)



// function h()
// {
//      console.log(this);
// }
// h()
// var u1={
//      name:"inderjeet singh",
//      class:12,
//      work:(a,b,c)=>{
//           console.log("hello");
//           return a
//      }
// }
// var u2={
//      name:"preetam singh",
//      class:3
//      }
// // console.log(u1.work.apply(u2,[1,2,3]))
// var v=u1.work.bind(u2,1,5,6)
// var hero={
//      name:"inder",
//      class:12,
//      her:function(){
//          var obj=()=>{
//           console.log(this);
//          }
//          obj()
//      }
// }
// hero.her()
// let a=[10,20,30,40]
// let b=a;
// b[0]=50;
// console.log(a)
// console.log(b)
// console.log(a[0]===b[0])

let btn=document.querySelector("button")
let bulb=document.querySelector(".bulb") 
let target=true
btn.addEventListener("click",()=>{
    // if(bulb.classList.toggle("lightup"))
    // {
    //     btn.textContent="OFF";
    // }
    // else{
    //     btn.textContent="ON"
    // }
    if(target)
    {
        bulb.style.backgroundColor="yellow";
        btn.textContent="OFF"
        target=false;
    }
    else{
        bulb.style.backgroundColor="transparent";
        btn.textContent="ON"
        target=true;
    }
})
