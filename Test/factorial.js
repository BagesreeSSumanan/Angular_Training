const readline = require("readline-sync");
let number = Number(readline.question("Enter the number: "));
let n = number
let factorialnumber =1
function factorial(){
    factorialnumber =factorialnumber*n
    n=n-1;
    if(n-1>0){
        factorial(n-1)
    }
}
factorial(n);
console.log(factorialnumber);