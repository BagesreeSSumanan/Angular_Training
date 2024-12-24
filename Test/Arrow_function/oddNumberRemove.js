const numbers = new Set([1,2,8,9,6,7,3,5,11]);
const result = new Set();
let evenNumber = numbers=>{
    for (element of numbers) {
        if(element%2 ==0){
            result.add(element);
        }
    }
    return result;
};
evenNumber(numbers);
console.log(result);