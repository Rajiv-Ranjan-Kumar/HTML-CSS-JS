/*Largest Number Among Three Numbers */
const num1 = parseInt(prompt("Enter First Number :"));
const num2 = parseInt(prompt("Enter Second Number :"));
const num3 = parseInt(prompt("Enter Third Number :"));

document.write(Math.max(num1,num2,num3));

if(num1 > num2 && num1 > num3)
    document.write("<br/>"+num1+" is Greter");
else if(num2 > num1 && num2 > num3)
    document.write("<br/>"+num2+" is Greter");
else if(num3 > num1 && num3 > num2)
    document.write("<br/>"+num3+" is Greter");
else
    document.write("<br/> All numbers are equals");