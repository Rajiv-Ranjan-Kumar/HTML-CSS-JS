/*JavaScript Program to Find HCF or GCD */
const num1 = parseInt(prompt("Enter First number:"));
const num2 = parseInt(prompt("Enter Second number:"));
let hcf;

for(let i = 1 ; i <= num1 && i <= num2 ; i++){
    if(num1 % i == 0 & num2 % i == 0)
        hcf = i;
}

document.write(`HCF of ${num1} and ${num2} = ${hcf}`);