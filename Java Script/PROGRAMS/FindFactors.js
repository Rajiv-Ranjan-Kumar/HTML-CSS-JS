/*JavaScript Program to Find the Factors of a Number
In this example, you will learn to write a JavaScript program that finds all the factors of an integer.
To be the factors of a number, the factor number should exactly divide the number (with 0 remainder). For example,

The factor of 12 is 1, 2, 3, 4, 6, and 12. */

const num = parseInt(prompt("Enter a Number:"));
document.write(`Factors of ${num} are : `);
for(let i = 1; i <= num; i++){
    if(num % i == 0)
        document.write(`${i},`);
}