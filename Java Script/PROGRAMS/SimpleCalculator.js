/*JavaScript Program to Make a Simple Calculator */

const operator = prompt("Enter Operator(+,-,*,/):");
const num1 = parseFloat(prompt("Enter First Number :"));
const num2 = parseFloat(prompt("Enter Second Number :"));
let result;

switch(operator){
    case '+':
        result = num1 + num2;
        document.write(`${num1} ${operator} ${num2} = ${result}`);
        break;
    case '-':
        result = num1 - num2;
        document.write(`${num1} ${operator} ${num2} = ${result}`);
        break;
    case '*':
        result = num1 * num2;
        document.write(`${num1} ${operator} ${num2} = ${result}`);
        break;
    case '/':
        result = num1 / num2;
        document.write(`${num1} ${operator} ${num2} = ${result}`);
        break;
    default:
        document.write("Please enter valide operator");
}
