const readline = require("readline-sync");
let firstNumber = Number(readline.question("Enter 1st number: "));
let SecondNumber = Number(readline.question("Enter 2nd number: "));
let ThirdNumber = Number(readline.question("Enter 3rd number: "));
let numbers =[firstNumber,SecondNumber,ThirdNumber];
let greatest = firstNumber;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > greatest) {
        greatest = numbers[i];
    }
}
console.log(greatest+" is the greatest number")
