const numbersInput = document.getElementById('numbers');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const numbers = numbersInput.value.split(',').map(Number);
    const reduceClone = (array, callback, initialValue) => {
        let accumulator = initialValue;
        for (let i = 0; i < array.length; i++) {
            accumulator = callback(accumulator, array[i]);
        }
        return accumulator;
    };

    const sum = reduceClone(numbers, (acc, curr) => acc + curr, 0);
    const product = reduceClone(numbers, (acc, curr) => acc * curr, 1);

    resultDiv.innerHTML = `Sum: ${sum}<br>Product: ${product}`;
});