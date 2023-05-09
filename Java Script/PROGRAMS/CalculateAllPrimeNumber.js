/*JavaScript Program to Print All Prime Numbers in an Interval */

const lowestNumber = parseInt(prompt("Enter lowest Number :"));
const highestNumber = parseInt(prompt("Enter Highest Number :"));

document.write(`All prime numbers between ${lowestNumber} and ${highestNumber} are :<br/>`);
for(let i = lowestNumber ; i <= highestNumber ; i++){
    let flag = 0;
    for(let j = 2; j < i ; j++){
        if(i % j == 0){
            flag = 1;
            break;
        }
    }
    if(i != 1 && flag == 0)
        document.write(" "+i);
}