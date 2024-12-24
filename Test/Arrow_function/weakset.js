const Person = new WeakSet();
const obj1 = { name: "AbC" ,age:11,email:"abc@gmail.com"};
const obj2 = { name: "bcd" ,age:11,email:"bcd@gmail.com"};
const obj3 = { name: "efg" ,age:11,email:"efg@gmail.com" };
const obj4 = { name: "xyz" ,age:11,email:"xyz@gmail.com"};
Person.add(obj1);
Person.add(obj2);
Person.add(obj3);
Person.add(obj4);
console.log(Person.has(obj1));
Person.delete(obj1)

console.log(Person.has(obj1));

