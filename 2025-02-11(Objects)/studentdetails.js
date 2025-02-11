const student = {}
student.name = "John Doe";
student.age = 22;
student.courses = ["math","physics","computer science"];
student.address = {
    city: "New York",
    zip: 10001
    }

console.log(student.name);
console.log(student.courses[1]);
console.log(student.address.zip);

student.age = 23;
console.log(student.age);
student.gpa = 3.8;

student.getDetails = function() {
    console.log(student.name + " is "
        + student.age + " years old." + " And has a GPA of "+ student.gpa);
}

student.getDetails();
