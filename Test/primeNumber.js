const readline = require("readline-sync");
let number = Number(readline.question("Enter the number: "));
let isPrime = true; 

if (number <= 1) {
    isPrime = false; 
} else {
    let i = 2;
    while (i * i <= number) { 
        if (number % i === 0) { 
            isPrime = false;
            break; 
        }
        i++;
    }
}

if (isPrime) {
    console.log(number + " is prime");
} else {
    console.log(number + " is not prime");
}
