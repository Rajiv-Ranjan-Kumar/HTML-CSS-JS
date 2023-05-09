/*JavaScript Program to Display Fibonacci Sequence Using Recursion
In this example, you will learn to program a Fibonacci sequence using recursion in JavaScript. */

const num = parseInt(prompt("Enter a number of term :"));
if(num > 0){
    let num1 = 0;
    let num2 = 1;
    document.write(`Fibonacci Sequance of ${num} = ${num1},${num2}`);
    fibonacciSequance(num);

    function fibonacciSequance(num){
        let nextNumber = num1+num2;
        document.write(`,${nextNumber}`);
        num1 = num2;
        num2 = nextNumber;
        if(nextNumber<num-1)
            fibonacciSequance(num);
    }
}
else
    document.write("Please enter +ve number");