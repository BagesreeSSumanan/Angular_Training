type Student = {
    age: number;
    grade: string;
};
const Students:{Name:string , Value:Student}[] =[
    {
    Name:"abc",
    Value:{
        age:20,
        grade:"A"
    }
    
},
{
    Name:"bcd",
    Value:{
        age:19,
        grade:"B"
    }
    
}
]

console.log(Students)
Students.push( {
    Name:"xyz",
    Value:{
        age:21,
        grade:"C"
    }
    
})
console.log(Students)
Students.forEach(element => {
    const Name =element.Name;
    const age =element.Value.age;
    const grade =element.Value.grade;
    console.log(Name + " "+age+" "+grade) 
});