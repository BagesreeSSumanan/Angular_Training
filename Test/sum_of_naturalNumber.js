const readline = require("readline-sync")
let n =Number(readline.question("Enter the number: "))
sum= 0;
for (let i = 1; i <= n; i++) {
    sum=sum+i
}
console.log("Sum of natural number is "+sum)
