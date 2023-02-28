const prompt=require("prompt-sync")();

/*
// q1:age between 10 and 20
let a= prompt("enter your age:")
if (a>10 && a<20){
    console.log("your age between 10 and 20")

}
else {
    console.log("your age n'tbetween 10 and 20")
}
// q2:make switch pgrm
let a= parseInt(prompt("enter your age:"))
switch (a){
    case 12:
        console.log("the num is 12")
        break
    case 13:
        console.log("the num is 13")
        break
    case 14:
        console.log("the num is 14")
    
}
*/
// q3:divigible by 2 and 3
let a= parseInt(prompt("enter your age:"))
if (a%2==0 && a%3==0){
    console.log("the num div by 2 and 3")
}
else{
    console.log("the num not div by 2 and 3")

}