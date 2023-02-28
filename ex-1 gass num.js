const prompt=require("prompt-sync")();

let num=100 ;
let num1=0;
let x=parseInt(Math.random()*(100-0));
// console.log(x)

let inp
do{
    inp=parseInt(prompt("Enter your number: "));
    if(inp==x){
        console.log("winner")
    }
    else if (inp>x){
        console.log("You Choice big to hide Number")
    }
    else  {
        console.log("You Choice small to hide Number")
    }
    num1+=1 ;
}while(inp!=x);
console.log(" Your Totall Marks is: ",num-num1)