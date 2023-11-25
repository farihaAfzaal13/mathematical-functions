const mathematicalFunctions = require('math-functions');
const number = 5;
const result = mathematicalFunctions.square(number);
console.log(`The square of ${number} is: ${result}`);

const factorialResult = mathematicalFunctions.factorial(number);
console.log(`The factorial of ${number} is: ${factorialResult}`);

const isPrime = mathematicalFunctions.isPrime(number);
console.log(`${number} is${isPrime ? '' : ' not'} a prime number`);


const squareRootResult = mathematicalFunctions.squareRoot(number);
console.log(`The square root of ${number} is: ${squareRootResult}`);
