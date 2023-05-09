/*This program computes roots of a quadratic equation when its coefficients are known.

The standard form of a quadratic equation is:

ax2 + bx + c = 0, where
a, b and c are real numbers and
a ≠ 0
To find the roots of such equation, we use the formula,

(root1,root2) = (-b ± √b^2-4ac)/2a
The term b^2-4ac is known as the discriminant of a quadratic equation. It tells the nature of the roots.

1.If the discriminant is greater than 0, the roots are real and different.
2.If the discriminant is equal to 0, the roots are real and equal.
3.If the discriminant is less than 0, the roots are complex and different.
Nature of the roots of quadratic equations */

const num1 = parseInt(prompt("Enter first number > 0 :"));
const num2 = parseInt(prompt("Enter Second number :"));
const num3 = parseInt(prompt("Enter Third number :"));

let root1,root2;
let discriminant = (num2*num2) - (4*num1*num3);

if(discriminant > 0){
    [root1,root2] = [((-num2+Math.sqrt(discriminant))/2*num1),((-num2-Math.sqrt(discriminant))/2*num1)];
}
else if(discriminant == 0){
    root1 = root2 = -num2 / ( 2 * num1);
}
else{
    root1 = ((-num2 / (2 * num1)).toFixed(2)) + "+" + ((Math.sqrt(-discriminant) / (2 * num1)).toFixed(2)) + "i";
    root2 = ((-num2 / (2 * num1)).toFixed(2)) + "-" + ((Math.sqrt(-discriminant) / (2 * num1)).toFixed(2)) + "i";
}

document.write("<br><br>Root1 is : " + root1);
document.write("<br><br>Root2 is : " + root2);
