const arr = [1, "Esther", true , [1 , 2 , 3]]
let students = ["Sara" , "Samad" , "Esther" , "Godis"]
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students.length);
students[3] = "Effiong"
console.log(students);

//adding elements to an array
students.push("Ada") //adds items to an array

console.log(students);
students.unshift("Uzoma") //adds items to the beginning of an array
console.log(students);

//removing elements from an array
students.pop() //removes the last item from an array
console.log(students);
students.shift() //removes the first item from an array
console.log(students);

//include , indexof
console.log(students.includes("Sara"));//includes checks if an item is in an array and returns a boolean value
console.log(students.indexOf("Sara"));//indexOf returns the index of an item in an array, if the item is not found it returns -1

//Reverse , sort , slice , splice
students.reverse() //reverses the order of an array
console.log("this is reversed:", students);
students.sort() //sorts the elements of an array
console.log("this is sorted:", students);
students.slice(1, 3) //returns a new array with the elements from index 1 to index 3 (not including index 3) meaning it returns a copy of the original array.
console.log("this is sliced:", students.slice(1, 3));
students.splice(1, 2) //removes the/2 elements from index 1 and returns the removed elements
console.log("this is spliced:", students.splice(1));
console.log("this is the array:", students);

//higher order array methods
//map , filter , reduce , forEach , findIndex , find , some , every
//higher order array methods are built in array methods that accept other array methods as a parameter or an argument
//Map method
const numbers = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

const marketList = ["rice" , "beans" , "garri" , "yam" , "plantain"];
const addedPrefix = marketList.map((item) => "I will buy " + item);
console.log(addedPrefix);

//const doubledNumbers = numbers.map((num) => num * 2);
const double = numbers.map((num) => {
    return num * 2;
});
//console.log(doubledNumbers);
console.log(double);

//filter method
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const complexion = ["dark" , "fair" , "medium" , "dark" , "fair"];
const darkComplexion = complexion.filter((item) => item === "dark");
console.log(darkComplexion);


//find method
const findFirstDark = complexion.find((item) => item === "dark");
console.log(findFirstDark);

//find index method
const findIndexOfDark = complexion.findIndex((item) => item === "dark");
console.log(findIndexOfDark);

//reduce
const nums = [700 , 300 , 500 , 1000 , 2000];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

const multiply = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);