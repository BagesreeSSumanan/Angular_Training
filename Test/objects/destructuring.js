const person = {
    name: "John Doe",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};
let {name,age,address:{city,country}} =person;
console.log(name + " " + age+" "+city+ " "+ country)

