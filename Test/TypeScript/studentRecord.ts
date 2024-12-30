type Student = {
    age: number;
    grade: string;
};
const Students:Record<string, Student> ={ 
    'Alice': {age:21,
        grade:"A"
    },
    'Bob':{age:20,
        grade:"B"
    }
}
console.log(Students)
Students["Jan"] = {age:19,grade:"A"};
console.log(Students)
for (const key in Students) {
    console.log(key, Students[key]);
}