const prompt=require("prompt-sync")();
user=0;
rendom=0;
Equle=0;
No_item=0;

let i=0;
while(i!=10){
    //genarat random item from array
    function getrandom(arr){
    const randomIndex=Math.floor(Math.random()*arr.length);
    const item=arr[randomIndex];
    return item;
}
    const array=["s", "w" ,"g"];
    const result=getrandom(array);
    // console.log(result)
    console.log("1.Snake(s) 2.Water(w) 3.Gun(g)")
    let inp=prompt()
    if (result =="s"){
        if(inp=="w"){
            console.log("You Loss This Round ")
            rendom+=1;
        }
        else if(inp=="g"){
            console.log("You 'win' This Round ")
            user+=1;
        }
        else if(inp=="s"){
            console.log("Equle")
            Equle+=1;
        }
        else{
            console.log("No item!")
            No_item+=1;
        }
    }
    else if (result =="w"){
        if(inp=="g"){
            console.log("You Loss This Round ")
            rendom+=1;
        }
        else if(inp=="s"){
            console.log("You 'win' This Round ")
            user+=1;
        }
        else if(inp=="w"){
            console.log("Equle")
            Equle+=1;
        }
        else{
            console.log("No item!")
            No_item+=1;
        }
    }
    else if (result =="g"){
        if(inp=="s"){
            console.log("You Loss This Round ")
            rendom+=1;
        }
        else if(inp=="w"){
            console.log("You 'win' This Round ")
            user+=1;
        }
        else if(inp=="g"){
            console.log("Equle")
            Equle+=1;
        }
        else{
            console.log("No item!")
            No_item+=1;
        }
    }
    else{
        console.log("No item Here..")
    }
    i++;
}   
    console.log("------------Result----------------")
    if(user==rendom){
        console.log("Equal point")
    }
    else if(user>rendom){
        console.log(`YOu are Winner! Your point is ${user}`)
    }
    else{
        console.log(`YOu loss The Game! Random point is ${user}`)
    }

