const Activity = new Map();
Activity.set("Day1 note learning", "Completed");
Activity.set("Day1 assignments", "In progress");
Activity.set("mcq", "Todo");
Activity.set("Day2 note learning", "Completed");
let CompletedCount= 0;
let InProgressCount= 0;
let TodoCount= 0;
let CompletedActivity = Activity => {
    for (const [key, value] of Activity) {
        if(value=="Completed"){
            CompletedCount++;
        }

    }
}
let InprogressActivity = Activity => {
    for (const [key, value] of Activity) {
        if(value=="In progress"){
            InProgressCount++;
        }

    }
}
let TodoActivity = Activity => {
    for (const [key, value] of Activity) {
        if(value=="Todo"){
            TodoCount++;
        }

    }
}
CompletedActivity(Activity);
console.log("Complted Activity count: "+CompletedCount);
InprogressActivity(Activity);
console.log("Inprogress Activity count: "+InProgressCount);
TodoActivity(Activity);
console.log("Todo Activity count: "+TodoCount);