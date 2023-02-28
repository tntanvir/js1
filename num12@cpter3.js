const prompt=require("prompt-sync")();

// q1= print student marks in Object use for loop
// const marks={
//     "tanvir":99,
//     "fuad":90
// }
// for (i in marks){
//     console.log(i+' '+marks[i])
// }
// q2: find correct number
let cr_num=34;


while(true){
let num=parseInt(prompt("enter a number"))
if (cr_num==num){
    console.log("you are right")
    break
}
else{
    console.log ("you are wrong")
}


}
