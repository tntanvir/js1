let num=[7,8,9,4,6,22]
// for (let i=0;i<num.length;i++){
//     console.log(num[i])
// }
// forEach loop
num.forEach((element)=>{
    console.log(element*element)
})

// Array.from
let name=("tanvir")
let arr=Array.from(name)
console.log(arr)


// for......of loop
for (let i of num){
    console.log(i)
}
// for in loop
for (let i in num){
    console.log(num[i])
}