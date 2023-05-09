/*JavaScript Program to Check if the Numbers Have Same Last Digit 
In this example, you will learn to write a program that checks whether
the last digit of three numbers is the same or not in JavaScript.*/

const num1 = parseInt(prompt("Enter first number:"));
const num2 = parseInt(prompt("Enter second number:"));
const num3 = parseInt(prompt("Enter third number:"));

let r1 = num1 % 10;
let r2 = num2 % 10;
let r3 = num3 % 10;

document.write((r1==r2&&r1==r3)?"Last Digites are Same":"Last Digites are not same");