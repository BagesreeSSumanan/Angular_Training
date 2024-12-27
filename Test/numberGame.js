const readline = require("readline-sync");

let points;
let totalpoints = 0;
async function userPoints(usernumber,random){
    if (random==usernumber){
        points = 2;
    }
    else if (Math.abs(random-usernumber)==1){
        points =1;
    }
    else{
        points =0;
    }
     return points;
}
async function playGame(){

   let usernumber = Number(readline.question("Enter the number: "));
    let random = Math.floor(Math.random() * 6) + 1;
    console.log("Random number : "+random)
    let currentpoint =await userPoints(usernumber,random);
    totalpoints= totalpoints+currentpoint;
    console.log()
    playagain = readline.question("Do you want to play again:");
    if(playagain== "yes"){
        playGame();
    }
    else{
        console.log("Total points is "+ totalpoints );
    }
   
}
playGame();

