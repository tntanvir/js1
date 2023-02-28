const prompt=require("prompt-sync")();

//start

let a = prompt("enter age");
a=Number.parseInt(a);
// console.log(typeof a);
// if (a>18){
//     alert("wellcome");
// }
// else{
//     alert("Not allow");
// }
console.log('you can',a<18? "n't drive":'drive')