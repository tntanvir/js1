const prompt=require("prompt-sync")();
// just while loop

let a=parseInt(prompt("enter a value of a"))
let sum=0;
i=0;
// while(i<a+1){
//     sum+=i
//     i++
//     console.log(i)
// }
// console.log("n1",sum)

// Do while loop

do{
    sum+=i
    i++
    console.log(i)
}while(i<a+1)
console.log("n2",sum)
