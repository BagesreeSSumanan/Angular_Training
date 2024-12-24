const missedCalls=["Vishnu","Akhil","Aswin","Pooja","Vishnu","Ananthan","Jith","Jith","Pooja","Aswin"]
let result = new Set();
let uniqueList = missedCalls =>{
    for(elements of missedCalls){
        if(!result.has(elements)){
            result.add(elements)
        }
    }
}
uniqueList(missedCalls);
console.log(result)