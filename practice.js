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

const song = "Bohemian Rhapsody";
const songScore = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (songScore / highestScore) * 100
}%.`;
console.log(output); 

let sentence = "Godis is a great developer, And a Developer is Awesome";
let position = sentence.indexOf("great");
console.log(position); // Output: 10
let position2 = sentence.indexOf("marvelous");
console.log(position2); // Output: -1
let position3 = sentence.indexOf("Developer", 17);
console.log(position3); // Output: 6

console.log("Hi there!");

const botName = "teacherBot";

const greeting2 = `My name is ${botName}.`;
console.log(greeting2);

const subject = "JavaScript";
const topic = "strings";

const newSentence2 = `Today, you will learn about ${topic} in ${subject}.`;
console.log(newSentence2);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

const remainder = 5 % 3;
console.log(remainder);
const result = 5 + '10';

console.log(result);
console.log(typeof result); 

const product = '10' + 5;

console.log(product);
console.log(typeof product); 


const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const subtractionResult2 = 'abc' - 5;
console.log(subtractionResult2); // NaN
console.log(typeof subtractionResult2); // number

const multiplicationResult2 = 'abc' * 2;
console.log(multiplicationResult2); // NaN
console.log(typeof multiplicationResult2); // number

const divisionResult2 = 'abc' / 2;
console.log(divisionResult2); // NaN
console.log(typeof divisionResult2); // number

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string


