const readline = require("readline-sync");
let firstNumber = Number(readline.question("Enter the 1st Number: "));
let secondNumber = Number(readline.question("Enter the 2nd NUmber: "));
let operator = readline.question("Enter the operator: ");
switch (operator){
    case "+":
        console.log(firstNumber+secondNumber);
        break;
    case "-":
        console.log(firstNumber-secondNumber);
        break;
    case "*":
        console.log(firstNumber*secondNumber);
        break;
    case "/":
        console.log(firstNumber/secondNumber);
        break;

}


