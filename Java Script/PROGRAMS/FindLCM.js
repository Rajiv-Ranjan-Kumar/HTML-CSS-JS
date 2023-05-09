/*JavaScript Program to Find LCM
In this example, you will learn to write a JavaScript program that finds the LCM of two numbers.*/

const num1 = parseInt(prompt("Enter First number:"));
const num2 = parseInt(prompt("Enter Second number:"));
let hcf;

for(let i = 1 ; i <= num1 && i <= num2 ; i++){
    if(num1 % i == 0 & num2 % i == 0)
        hcf = i;
}

let lcm = (num1*num2)/hcf;
document.write(`LCM of ${num1} and ${num2} = ${lcm}`);