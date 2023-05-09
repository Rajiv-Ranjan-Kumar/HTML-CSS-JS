/*JavaScript Program to Check Armstrong Number */
const num = parseInt(prompt("Enter a number :"));
let count = 0;
let sum = 0;
let temp = num;
while(temp > 0){
    count += 1;
    temp = parseInt(temp / 10);
}
temp = num;
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
if(num == sum)
    document.write("Armstrong Number");
else
    document.write("Not Armstrong Number");