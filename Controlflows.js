//if/else
let age = 40

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can not vote");
}
//
let gender = "female"

if (gender === "female") {
    console.log("You are a female, use the lady's restroom");
}else if (gender === "non-binary") {
    console.log("use the non-binary room");
} else if (gender === "trans") {
    console.log("use the trans room");
}else if (gender === "male") {
    console.log("You are a male, use the men's restroom");
}

//loops
// for (start; condition; increment) {
//     //loop
// }
for (let i = 0; i < 10; i++) {
    console.log(i);
}   
let arrOfnames = ["John", "Jane", "joe", "jim", "Jess", "esther", "Godis"];
console.log(arrOfnames.length);
for(let names = 0; names <arrOfnames.length; names++) {
    console.log("TECHCRUSH" + arrOfnames[names]);
}

for(let x=1; x<=36; x++) {
    console.log(x * 2);
}

//while loop
let loginAttempts = 1;
while(loginAttempts <= 3) {
    console.log(`attempt number ${loginAttempts}`);
    loginAttempts++;
}
let scores = [20, 12, 25, 15];  
for(let newscores = 0; newscores < scores.length; newscores++) {
    console.log(scores[newscores] + 20)
}
