const prompt=require("prompt-sync")();

// q1: make array and add a number take input
// let arr=[5,6,7,8,90]
// let inp=parseInt(prompt("Enter a valu: "))
// arr.push(inp)
// console.log(arr)


// q2:add valu is no:1 qustion . when add 0 loop  stop
// let arr=[5,6,7,8,90]
// let inp;
// do{
//     inp=parseInt(prompt("Enter a valu: "))
//     arr.push(inp)
    
// }while(inp!=0);
// console.log(arr)


// q3: filter a Array divigibal by 10
// let arr=[59,9,0,90,44,70,440]
// let a=arr.filter((n1)=>{
//     return n1%10==0;
// })
// console.log(a)
// // q4: make a arry of square of givan Number

// let arr=[59,9,0,90,44,70,440]
// let a=arr.map((n1)=>{
//     return n1*n1*n1
// })
// console.log(a)
// q4: make a arry of square of givan Number

let arr=[1,2,3,4,5 ]
let a=arr.reduce((n1,n2)=>{
    return n1*n2
})
console.log(a)


