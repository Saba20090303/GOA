function calculate(num1, num2, operation) {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          return 'Error: Division by zero';
        }
        return num1 / num2;
      default:
        return 'Invalid operation';
    }
  }

  function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  const { calculate, filter } = require('./calculator');
  console.log(calculate(10, 5, 'add'));
  console.log(calculate(10, 5, 'subtract'));
  console.log(calculate(10, 5, 'multiply'));
  console.log(calculate(10, 0, 'divide'));
  

  const numbers = [1, 2, 3, 4, 5, 6];
  const filteredNumbers = filter(numbers, (num) => num % 2 === 0);
  console.log(filteredNumbers);




 