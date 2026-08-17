let age = 20;
let isStudent = true;
console.log(age , isStudent);
let basePrice = 1000;
if (age < 12) {
    console.log("You are a minor, you get a discount of 100%");
} else if (isStudent || age >= 65) {
    console.log("You are a student or senior, you get a discount of 50%");
} else {
    console.log("You are an adult, you pay full price of " + basePrice);
}
let finalPrice = 1000;
if (age < 12) {
    finalPrice = 0;
}
console.log("Final price is: " + finalPrice);
function calculateTicketPrice(age, isStudent) {
    let finalPrice = 1000;
    if (age < 12) {
        finalPrice = 0;
    } else if (isStudent || age >= 65) {
        finalPrice = 500;
    } else {
        finalPrice = 1000;
    }
    return finalPrice;
}
console.log(calculateTicketPrice(20, true));
console.log(calculateTicketPrice(10, false));
console.log(calculateTicketPrice(70, true));
console.log(calculateTicketPrice(30, false));
console.log(calculateTicketPrice(70, false));
console.log(calculateTicketPrice(5, true));

let score = 100;
function gradingSystem(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 50 && score <= 69) {
        return "B";
    } else if (score >= 0 && score <= 49) {
        return "F";
    } else {
        return "FAILED";
    }
}

console.log(gradingSystem(100));

//Examples of Integers
console.log(3);
console.log(5);
console.log(-70);
let student = {
    name: "AKACHUKWU GODIS",
    regno: "BAD/2026/TC-8/0175"
};
console.log(student.name);
console.log(student.regno);

const name = "Godis";
const greeting = `Hello ${name}, welcome to the world of JavaScript!`;
console.log(greeting);

const schoolName = "TechCrush"
const description = `Welcome to ${schoolName}, Where you go from novice to Tech pro!!`
console.log(description);

const name1 = "Godis";
const age1 = 28;
const message = `My name is ${name1} and I am ${age1} years old.`;
console.log(message);

const poem = `I am him
He is me
We are one
Together we are free.`;
console.log(poem);
