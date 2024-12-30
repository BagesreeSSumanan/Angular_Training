var Students = [
    {
        Name: "abc",
        Value: {
            age: 20,
            grade: "A"
        }
    },
    {
        Name: "bcd",
        Value: {
            age: 19,
            grade: "B"
        }
    }
];
console.log(Students);
Students.push({
    Name: "xyz",
    Value: {
        age: 21,
        grade: "C"
    }
});
console.log(Students);
Students.forEach(function (element) {
    var Name = element.Name;
    var age = element.Value.age;
    var grade = element.Value.grade;
    console.log(Name + " " + age + " " + grade);
});
