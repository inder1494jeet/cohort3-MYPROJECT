let prices=[100,250,500,150,700]
// let newarr=new Array;
// prices.forEach((elem)=>{
//     if(elem>300)
//     {
//         newarr.push(elem)
//     }
// })
// console.log(newarr)
// let arr1=prices.filter((elem)=>{
//     return elem>300
// })
// console.log(arr1)


// let marks=[80,90,70,85,95]
// let total=marks.reduce((acc,elem)=>{
//         return acc+=elem;
// },0)
// console.log(total/marks.length)

//find the highest frequency element in array
//     let count={}
//     let highest=[2,2,2,2,4,2,5,1,1,1]
//     let freq=0
//     freqmax=highest[0]
//     highest.forEach((i)=>{
//         if(count[i])
//         {
//             count[i]=count[i]+1;
//         }
//         else{
//               count[i]=1;
//         }
//       if(count[i]>freq)
//       {
//         freq=count[i]
//         freqmax=i;
//       }

//     })
//    console.log(freqmax)

 let highest=[2,2,2,2,4,2,5,1,1,1]
 let count={}
 let freqcount=0
 let freqelem=highest[0]
 highest.forEach((elem)=>{
    count[elem]=(count[elem]||0)+1;
    if(count[elem]>freqcount){
        freqcount=count[elem];
        freqelem=elem

    }

 })
 console.log(count)
//  console.log(freqelem)
//  console.log(freqcount)
 for(let key in count)
 {
    console.log(key,count[key])
    
 }
  
 let user={
    name:"inderjeet",
    age:20,
    city:"bikaner"
 }

 user.age=21;
 console.log(user)
 for(let key in user)
 {
    console.log(`${key} : ${user[key]}`)
 }
console.log( Object.entries(user))
for(let [key,value] of Object.entries(user) )
{
    console.log(key,value)
}
let employee={
    inder:250,
    ritik:150,
    sarthak:200
}
let highestsal=0;
let name=null
for(let keys in employee)
{
    if(employee[keys]>highestsal)
    {
        highestsal=employee[keys]
        name=keys
    }
}
console.log(highestsal,name)
function sum(...numbers)
{
    console.log(numbers)
   return  numbers.reduce((acc,val)=>{
        return acc+val;
    },0)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))
// function adult(u)
// {
//    return u.filter(val=> val.age>18)
// }
// let u=[
//     {name:"inder",age:20},
// {name:"sheela",age:10},
// {name:"metha",age:15}]
// console.log(adult(u))



// function total(cart)
// {
//     return cart.reduce((acc,val)=>{
//        return  acc+=(val.price)*(val.qty)
//     },0)
// }
// let cart=[
//     {name:"mouse",price:500,qty:2},
//     {name:"keyboard",price:1000,qty:1},
//     {name:"monitor",price:10000,qty:1}
// ]
// console.log(total(cart))
function grade(student)
{
    return student.map((elem)=>{

       let total= elem.mark.reduce((acc,val)=>{
                return acc+val
        },0)
        let grade=null;
        let average=total/elem.mark.length
        if(total>=100)
        {
            grade='A'
        }
        else{
            grade='B'
        }
        return {
            name:elem.name,
            average:average,
            grade:grade
        }
    })
}

let student=[
    {name:"inder",mark:[10,50,50,40]},
    {name:"ritik",mark:[10,10,10,10]}
]
console.log(grade(student))

class bookinfo{
    constructor(title,author,id,borrowed,returnbook){
        this.title=title;
        this.author=author;
        this.id=id;
        this.borrowed=borrowed;
        this.returnbook=returnbook
    }
    showbookname()
    {
        console.log(`the book  id is ${this.id} and the name is ${this.title} written by ${this.author} `)
    }
    bookborrowed()
    {
        if(this.bookborrowed)
        {
            console.log(`yes the book is borrowed by person`)
        }
    }
    rbook()
    {
        if(this.returnbook)
        {
            console.log("the person returned the book")
            this.borrowed=false;
        }
        else{
            console.log("the person has borrowed book")
        }
    }
}
b1=new bookinfo("my name is","inderjeet",1,true,false)
b1.showbookname()
b1.bookborrowed()
b1.rbook()



