/*JavaScript Program to Find Sum of Natural Numbers Using Recursion
In this example, you will learn to write a JavaScript program that finds the sum of natural numbers using recursion. */

const num = parseInt(prompt("Enter a number:"));
let sum = 0;
recursion(num);
document.write("Sum = "+sum);

function recursion(num){
    sum = sum + num;
    if(num != 0)
        recursion(parseInt(num-1));
}