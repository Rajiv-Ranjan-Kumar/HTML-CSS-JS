/*
Javascript Program to Generate a Random Number
In this example, you will learn to generate a random number in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Math random()
JavaScript Math floor()

Math.random() * (max - min + 1) + min
Math.floor(Math.random() * (max - min + 1)) + min */

let x = Math.random() * (10 - 1 + 1) + 1; // floating number
let y = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // integer
document.write("Rendom(floating) number between 1 to 10 is : "+x);
document.write("<br/>Rendom(integer) number between 1 to 10 is : "+y);