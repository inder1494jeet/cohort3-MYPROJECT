// //find price greater than 300
// let prices= [100,250,500,150,700];
// let ans=prices.filter((elem)=>{
//     return elem>300
// })
// console.log(ans)

// //print last student name
// let students= ["Aman","Ritik","Priya","Rahul"];
// console.log(students[students.length-1])

// //add new product

// let products= ["Laptop","Mouse","Keyboard"];
// products.push("monitor")
// console.log(products)

// //remove last notification
// let notifications= [
// "Order Placed",
// "Order Shipped",
// "Order Delivered"
// ];
// notifications.pop()
// console.log(notifications)

// //check user exists
// let users= ["Aman","Ritik","Priya"];
// console.log(users.includes("Ritik"))

// //convert marks into percentage
// let marks= [80,90,70];
// let a=marks.map(elem=>{
//     return elem+'%'
// })
// console.log(a)

// //total size
// //Question 7 — Count Products
// let cart= [
// "Mouse",
// "Keyboard",
// "Monitor",
// "Laptop"
// ];
// console.log(cart.length)

// //Question 8 — Student Average
// let mark= [80,90,70,85,95];
// let total=mark.reduce((acc,elem)=> acc+elem,0)
// console.log(total/mark.length)

// //Question 9 — Even Numbers Finder
// let numbers= [1,2,3,4,5,6,7,8];
// let even=numbers.filter(elem=>elem%2==0)
// console.log(even)


// //Question 10 — Product Search
// let product= [
// "Laptop",
// "Mouse",
// "Keyboard",
// "Monitor"
// ];
// console.log(product.indexOf("Keyboard"))


// ///Calculate total revenue.
// let sales= [500,700,1000,300];
// console.log(sales.reduce((acc,elem)=> acc+elem))


// //Convert every username into uppercase.
// let u= ["ritik","aman","priya"];
// console.log(u.map(elem=>elem.toUpperCase()))



// //Question 13 — Find First Adult
// let ages= [12,15,17,19,22];
// console.log(ages.find(elem=>elem>=18))


// //Question 14 — Positive Number Check


// let nums= [5,8,10,3];
// console.log(nums.every(elem=>elem>0))



// //Question 15 — Most Frequent Number
// let n= [1,2,3,2,4,2,5,1,1,1];
// let o={}
// let m=0;
// let mostelem=0;
// n.forEach((elem)=>{
//     o[elem]=(o[elem]||0)+1;
//     if(o[elem]>m)
//     {
//         m=0[elem];
//         mostelem=elem;
//     }
// })
// console.log(o,mostelem)

// //Question 16 — Second Largest Number
// let num= [10,50,20,80,40];

// num.sort()
// console.log(num[num.length-2])

//Question 17 — Remove Duplicates
let ids= [1,2,2,3,4,4,5,5];
u=[]

//this is the right way or with set
ids.forEach((elem)=>{
    if(!u.includes(elem))
    {
        u.push(elem);
    }
})
console.log(u)
for(let i=0;i<ids.length;i++)
{
    if(ids[i]==ids[i+1])
    {
        ids.splice(i+1,1)
    }
}
console.log(ids)
// console.log(ids)
// Question 18 — Longest Word
let words= [
"JavaScript",
"HTML",
"CSS",
"Programming"
]
let hlength=0;
words.forEach((elem)=>{
    hlength=Math.max(hlength,elem.length);
})
console.log(hlength)

