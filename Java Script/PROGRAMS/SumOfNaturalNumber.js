/*JavaScript Program to Find the Sum of Natural Numbers */

const num = parseInt(prompt("Enter Posetive Number :"));
let sum = 0;
for(let i = 1 ; i <= num ; i++)
    sum = sum + i ;
document.write(`Sum = ${sum}`);