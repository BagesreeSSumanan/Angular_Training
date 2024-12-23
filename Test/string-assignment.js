let input = "Hello Hai How are you?";

let spceRemoved = input.replace(/\s+/g, '');
console.log("Space Removed sentance: "+spceRemoved);

let extractedOutput = input.substring(6,9)
console.log("Extracted word: "+extractedOutput);

let containsHello = input.toLowerCase().includes("hello");
console.log("Is sentenece contain hello: "+containsHello);

let secondInput = 'We are what we believe we are.'
let wordcontain= secondInput.match('are','xyz');
console.log("The sentenece contain the word: "+wordcontain);

let wordTocheck= /what/;
let iscontainwhat = wordTocheck.test(secondInput);
console.log("Sentenece contain word what: "+iscontainwhat);

let wordCount = (secondInput.match(/\bare\b/g) || []).length;
 console.log("count of are: "+wordCount);

 let replacedoutput = 'hello how are you?'.replace('hello','hai');
 console.log(replacedoutput);

 let lowercaseInput = 'We are what we believe we are.'.toLocaleLowerCase()
let replacedoutput2 =lowercaseInput.replace(/we/g, 'I am');
 console.log(replacedoutput2);

