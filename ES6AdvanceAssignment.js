//Map
// let arr =[1,2,3,4,5]
// let s = arr.map((item)=>{if(item>2)
// return item})
// console.log(s)


// //Spread operator
// let arrA= ['a','b','c']
// let arrB = [...arrA, 'x','y','z']
// console.log(arrB)



// let objA = {m:'z',n:'e',o:'b',p:'r',q:'a'}
// let objB = {...objA,q:'o',r:'n',s:'i',t:'c',u:'s'}
// console.log(objB)

// Rest Operator
// const fun =(a,b,...args)=>{
//         return (args.map((item)=>{
//                 return a+b+item
//         }))
// }
// console.log(fun(1,2,3,4,5,6,7))


// const add = (...args)=>{
//     return (args.reduce((prev,cur)=>prev+cur))
// }
// console.log(add(1,2,3,4,5,6))


//Destructuring

// let objA = {a:1,b:2,c:3}
// const {a,b}= objA
// console.log(a)

let arrE=['x','y','z']
let [f,g,h] = arrE
console.log(f)

