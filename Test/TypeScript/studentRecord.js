var Students = {
    'Alice': { age: 21,
        grade: "A"
    },
    'Bob': { age: 20,
        grade: "B"
    }
};
console.log(Students);
Students["Jan"] = { age: 19, grade: "A" };
console.log(Students);
for (var key in Students) {
    console.log(key, Students[key]);
}
