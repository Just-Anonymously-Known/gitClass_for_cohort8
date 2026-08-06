const obj = {
    name : "AKACHUKWU GODIS",
    gender : "male",
    age : 20,
    complexion : "dark",
};

//adding props to the object
let phone = {
    brand : "Samsung",
    model : "Galaxy S22",
    price : 350000,
};

phone.color = "black";
console.log(phone);

let student = {
    name : "AKACHUKWU GODIS",
    regno : "BAD/2026/TC-8/0175",
    course : "JavaScript",
    year : 2024,
    friends : ["John", "Jane", "Joe", "Jim"],
};
console.log(student);
student.gender = "male";
console.log(student);
student.course = "Node.js";
console.log(student);
delete student.year;
console.log(student);

let employee = {
    name : "John Doe",
    role : "frontend Developer",
    salary : 450000,
    city : "Lagos"
};

let hisName = employee.name;
let hiRole = employee.role;
let hisSalary = employee.salary;
let hisCity = employee.city;

const {name, role, salary, city} = employee;