/*Javascript Program to Check if a number is Positive, Negative, or Zero */
const number = parseFloat(prompt("Enter a number : "));
if(number > 0)
    document.write(number+" Is +ve");
else if(number < 0)
    document.write(number+" Is -ve");
else
    document.write(number +" Is Zero");