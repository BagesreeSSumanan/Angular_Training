const student = {
    RollNo:"1",
    course:"FullStack",
    duration:"6 months",
    start_date:"6/24/2024",
    end_date:"12/24/2024",
    garde:"A+",
    get rollnum(){
        return this.RollNo;

    },
    set studentGrade(newGrade) {
        this.grade = newGrade;
    },

};
console.log("Roll Number:", student.rollnum); 


student.studentGrade = "A";
console.log("Updated Grade:", student.grade);


