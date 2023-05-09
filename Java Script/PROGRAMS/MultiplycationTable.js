/*JavaScript Program to Display the Multiplication Table */
const num = parseInt(prompt("Enter a number for Table:"));
for(let i = 1 ; i <= 10 ; i++)
    document.write(`<br/>${num} X ${i} = ${num*i}`);