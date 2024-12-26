const person={
    Name: "Johny",
    Age: 40,
    Cars:[
           { 
             name:"ford",
             models:["mustang","Fiest","Mustang"]
           },
           { 
                name:"BMW",
                models:[320,"x3","x5"]
            },
             { 
                 name:"fiat",
                 models:[500,"panda"]
             }
          ]
}
console.log("Name:", person.Name);
console.log("Age:", person.Age); 
person.Cars.forEach(element => {
  console.log("Cars-Name:",element.name);
  element.models.forEach((model) => {
    console.log("Model:", model);
  });
});
