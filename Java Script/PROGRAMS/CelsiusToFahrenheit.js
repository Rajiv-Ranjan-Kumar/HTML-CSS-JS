/*You can convert the celsius value to fahrenheit by using the formula:
fahrenheit = celsius * 1.8 + 32 */

const celsius = parseInt(prompt("Enter a celsius value:"));
let fahrenheit = celsius * 1.8 + 32;
document.write(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);