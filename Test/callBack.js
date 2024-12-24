const numbers = [1,2,3,4,5,6,7,8,9];
let oddnumbers = new Array();
function sortedArray(numarray,callback){
    for (const element of numarray) {
        if (callback(element)) { 
            oddnumbers.push(element); 
        }
    }
}
function isEven(element){   
    return element % 2 == 0 ? true : false;
}
sortedArray(numbers,isEven)
console.log(oddnumbers);