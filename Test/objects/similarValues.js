let obj1 = {
    name: "John",
    age: 23,
    degree: "CS"
}

let obj2 = {
    age: 24,
    degree: "CS"
}


var obj1PropertName=(Object.getOwnPropertyNames(obj1));
var obj2PropertName=(Object.getOwnPropertyNames(obj2));

for (const element1 of obj1PropertName) {
    for (const element2 of obj2PropertName) {
        if (element1 === element2) {
            if (obj1[element1] === obj2[element2]) {
                console.log(element1+ " has a similar values.");
            } else {
                console.log(element1+" has a different value.");
            }
        }

    }
}