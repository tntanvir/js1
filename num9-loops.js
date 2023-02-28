const prompt=require("prompt-sync")();
/*let sum=0;
let num=parseInt(prompt("enter a number"))
for (i=1;i<num+1;i++){
    sum+=i
}
console.log(sum)
*/
// for in loop
let obj={
    "harry":44,
    "fuad": 88

}
for(i in obj){
    console.log(i +"  "+ obj[i])
}