function greet(name) {
    return `Hello, ${name}!`;
  }
  function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
export { greet, calculateAverage };



import { greet, calculateAverage } from './functions.js';

console.log(greet('Alice'));
const numbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers));
