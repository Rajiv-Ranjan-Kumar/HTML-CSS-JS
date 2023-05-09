/*JavaScript Program to Find Armstrong Number in an Interval */
const lowerNumber = parseInt(prompt("Enter lower number :"));
const higherNumber = parseInt(prompt("Enter higher number :"));

document.write(`<b>All Armstrong number between ${lowerNumber} and ${higherNumber} are :<br/>`);
for(let i = lowerNumber; i <= higherNumber; i++){
    let temp = i;
    let count = 0;
    let sum = 0;
    while(temp > 0){
        count += 1;
        temp = parseInt(temp / 10);
    }
    temp = i;
    while(temp > 0){
        let remender = parseInt(temp % 10);
        let t = count;
        let result = 1;
        while(t > 0){
            result = result * remender;
            t -= 1;
        }
        sum = sum + result;
        temp = parseInt(temp / 10);
    }
    if(i == sum)
        document.write(` ${sum},`);
}