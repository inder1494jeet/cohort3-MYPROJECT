// var a="inderjeet"
// var b=19
// console.log(`my name is ${a} and age is ${b}`); //template literals 
// var a="helllo bhai keseo ho " //immutable
// var b=a.length
// var c=a.indexOf("ll")
// var d=a.replace("ell","lle")
// var e=a.includes("i")
// var f=a.charAt(5);
// var g=a.split("o")
// var a=[11,20,33,40,50]
//for iteration to all element in array we use for each
// a.forEach((elem,index)=>{
//     console.log(elem*index);
// })
//map ->jese he dimag m aye ek new array bna lo kyoki foreach kuch return nhi kerta apan ko kuvh transform kerke usko new array m chahiye tu map 
//ye hof h means ye ya tu function return ya function as a argument pass kerte h 
// var b=a.map((elem,idx)=>{
//     return elem*elem;
// })
// b.forEach((elem)=>{
//     console.log(elem);
// })
//filter basically filteration kerne ke liye kaam ata h jese koi element apan ko nhi chahiye hoga tu vo remove ker deta h new array m add nhi kerta but map har element add kerta h or condition m true false m answer deta h 
// var s =["inder","chandan","vishu","hena"]
// var b=s.filter((elem,idx)=>{
//     return elem.includes('a');
// })
// b.forEach((elem)=>{
//     console.log(elem);
// })
//reduce kya kerta h sb bhul jao ju padha apne map filter reduce basically array ko ek single element m bnanae ke liye kaam ata h isme accumlator,value hoti h 
// var b=a.reduce((acc,val)=>{
//     return acc+=val*val
// },0)
// console.log(b)
// const str="inder"
// var b=str.split("").reduce((acc,val)=>{
//     return val+acc;
// })
// console.log(b)
// var a={
//     name:"inder",
//     age:20,
//     height:"5.10 feet",
//     weight:80,
//     post:"junior website developer"
// }
// a.salary="15000"
// console.log(a)
// delete a.salary
// a.name="inderjeet"
// console.log(a)
// console.log(Object.entries(a))
// console.log(a)
// var user={
//     name:"inderjeet",
//     ismarried:true,
//     sports:["badminton","tt","kabbadi"],
//     spouse:{
//         name:false,
//         proffession:false,
//         age:false
//     }
// }
// console.log(user.sports[1])
// console.log(user.spouse.age)
// var techyinder={
//     name:"inderjeet",
//     age:20,
//     work:["videoeditor","webdeveloper","seo engineer",40],
//     family:{
//         fathername:"narendra singh",
//         mothername:"meena kaur",
//         brother:"preetam singh"
//     },
//     sayhello:(b)=>{ //objects m function bnaye tu usko name de diya h method method puche tu object ke andar function
//         console.log("hello",b)
       
//         return 12
//     }
// }
// console.log((techyinder.age+techyinder.work[3])+techyinder.family.brother)
// console.log(techyinder.sayhello("inder"))
// var maths={
//      add:(a,b)=>{
//         return a+b;
//     },
//     square:(a)=>{
//         return a*a;
//     },
//     cube:(a)=>{
//         return a*a*a;
//     }
// }
// console.log(maths.square(12))

// var a=[10,20,30]
// var [arr,,b]=a
// console.log(arr,b)
// var val1=12;
// var val2=13;
// [val2,val1]=[val1,val2]
// console.log("val1",val1)
// console.log("val2",val2)

// arr=[1,2,3,4,5]
// let ans=arr.map((elem,idx)=>{
//     return elem*idx;
// })
// console.log(ans)

// class UserName{//pascx

// }

// function introduce(city,country) {
// console.log(`${this.name} from ${city}`);
// }
// const person= {
//  name:"inderjeeet"
// };
// introduce.apply(person,["bikaner","india"])


// let user= {
//  name:"Ritik",
//  greet() {
// console.log(this.name);
//  }
// };
// const fn=user.greet.bind(user);
// fn();

//inhertiance by object.create
// const animal= {
//  eats:true
// };
// const dog=Object.create(animal)
// console.log(dog.eats)


// function Person(name) {
// this.name=name;
// }
// Person.prototype.greet=function(){
//     console.log(`my name is ${this.name}`);

// }
// let p1=new Person("inderjeet")
// p1.greet()

// class Student{
//     constructor(name,marks)
//     {
//         this.name=name;
//         this.marks=marks
//     }
//      getgrade(){
//         if(this.marks>90)
//         {
//             console.log(`${this.name} you achieved A grade`)
//         }
//         else if(this.marks>75 && this.marks<=90)
//         {
//             console.log(`${this.name} you achieved B grade`)
//         }
//         else if(this.marks>60 && this.marks<=75)
//         {
//             console.log(`${this.name} you achieved C grade`)
//         }
//         else{
//             console.log(`${this.name} you achieved F grade`)
//         }
//      }
// }
// let s1=new Student("inder",92)
// let s2=new Student("ritik",52)
// s1.getgrade()
// s2.getgrade()



// class Employee{
//     constructor(name,salary,desc)
//     {
//         this.name=name;
//         this.salary=salary;
//         this.desc=desc
//     }
//     work(){
//         console.log(`${this.name} so your work is a ${this.desc} and you enjoying a salary with ${this.salary} `)
//     }
// }
// class Developer extends Employee{
//     constructor(name,salary,desc,marks)
//     {
//         super(name,salary,desc);
//         this.marks=marks;
//     }

//      getgrade(name,marks){
//         if(this.marks>90)
//         {
//             console.log(`${this.name} you achieved A grade`)
//         }
//         else if(this.marks>75 && this.marks<=90)
//         {
//             console.log(`${this.name} you achieved B grade`)
//         }
//         else if(this.marks>60 && this.marks<=75)
//         {
//             console.log(`${this.name} you achieved C grade`)
//         }
//         else{
//             console.log(`${this.name} you achieved F grade`)
//         }
     
// }

//     }

// let e1=new Developer("inderjeet",266000,"web-Devloper",92)
// e1.work()

// e1.getgrade()

// let a =[1,2,3,4,5]
// let ans=a.reduce((elem,acc)=>{
//     return acc+=elem
// },0)
// // console.log(ans)
// let obj1={
//     // key:value
//     name:"techyinder",
//     subject:"js"
// }
// // console.log(obj1.name)
// // console.log(Object.keys(obj1))
// // console.log(Object.values(obj1))
// console.log(Object.entries(obj1))
let arr=[1,2,3,4,5]
let ans=arr.findIndex((elem)=>{
    return elem==3
})
console.log(ans)