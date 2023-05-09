/*JavaScript Program to Find Factorial of Number Using Recursion */
const num = parseInt(prompt("Enter a Number :"));
let fact = 1;
factorial(num);
document.write(`Factorial of ${num} is : ${fact}`);
function factorial(num){
    if(num > 0){
        fact = fact * num;
        factorial(num-1);
    }
}