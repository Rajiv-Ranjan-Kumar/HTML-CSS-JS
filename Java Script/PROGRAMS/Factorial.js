/*JavaScript Program to Find the Factorial of a Number */
const number = parseInt(prompt("Enter a number :"));
let fact = 1;
for(let i = 1 ; i <= number; i++){
    fact = fact * i ;
}
document.write(`The Factorial of ${number} is : ${fact}`);