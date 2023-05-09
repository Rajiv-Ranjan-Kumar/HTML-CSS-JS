/*write a program to swap two variables in JavaScript using various methods. */

const num1 = parseInt(prompt("Enter First Number :"));
const num2 = parseInt(prompt("Enter Second Number :"));

document.write("Befor Swaping<br>");
document.write("num1 = "+num1+"<br>num2 = "+num2);


/*Using a Temporary Variable */
document.write("<br>After Swaping<br>");
var x = num1;
var y = num2;
let t = x;
x = y;
y = t;
document.write("num1 = "+x+"<br>num2 = "+y);

/*Using es6(ES2015) Destructuring assignment */
document.write("<br>After Swaping<br>");
var [x,y]= [num2,num1];
document.write("num1 = "+x+"<br>num2 = "+y);

/*Using Arithmetic Operators */
document.write("<br>After Swaping<br>");
var x = num1;
var y = num2;
x = x+y;
y = x-y;
x = x-y;
document.write("num1 = "+x+"<br>num2 = "+y);

/*Using Bitwise XOR operator */
document.write("<br>After Swaping<br>");
var x = num1;
var y = num2;
x = x^y;
y = x^y;
x = x^y;
document.write("num1 = "+x+"<br>num2 = "+y);