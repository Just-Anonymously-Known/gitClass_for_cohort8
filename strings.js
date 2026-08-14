const hisName = "GoDIs";

console.log(hisName.toLowerCase());// godis
console.log(hisName.toUpperCase());// GODIS

function lowerMe(value) {
    return value.toLowerCase();
}

console.log(lowerMe(hisName));// godis

const trimExample = "   Hello World!   ";
console.log(trimExample.trim());// Hello World!
console.log(trimExample.trimStart());// Hello World!
console.log(trimExample.trimEnd());//    Hello World!

let fileName = "report_final_2024.pdf";

console.log(fileName.startsWith("report"));// true
console.log(fileName.startsWith("draft"));// false
console.log(fileName.endsWith(".pdf"));// true
console.log(fileName.endsWith(".docx"));// false


const extractExample = "Esther";
console.log(extractExample.slice(0, 3));// "Est"
console.log(extractExample.slice(3)); // "her"
console.log(extractExample.slice(-3)); // "her"
console.log(extractExample.substring(0, 3));// "Est"
console.log(extractExample.substring(3)); // "her"
console.log(extractExample.substring(-3)); // "Esther" (negative values are treated as 0)