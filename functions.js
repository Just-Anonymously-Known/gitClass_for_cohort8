//declare
//functions without parameters
function greet() {
    //console.log("Hello World");
}

function greetings() {
    //console.log("Good morning everyone");
}
//add

//functions with parameters
function welcome(name) {
    //console.log(`Welcome to class MR/MISS/MRS ${name}`);
}
welcome("Esther")
function add () {
    let x = 4;
    let y = 6;
    return x + y;
}
//console.log(add());

function addition (x , y) {
    return x + y;
}
//console.log(add());
function addition (x , y) {
    return x + y;
}
//console.log(addition(9, 10));
function ageCheck(age) {
    return age >= 18
}

let estherAge = ageCheck(15);
//console.log(estherAge);

function luckyNumber(number) {
    if (number === 4) {
        return "congratulations";
    } else {
        return "try again sucker";
    }
}
//scope
//global scope
let score;
function gradingSystem() {
    if (score >= 50) {
        return "You passed";
    } else {
        return "You failed";
    }
    function deliveryFee() {
        let fee = 5000;
        return fee;
    }
    
    //ARROW FUNCTIONS
    const minus = (num) => {
        return num - 50;
    }
    let result = minus(75);
}