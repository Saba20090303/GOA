const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
console.log(person);

console.log(`Name: ${person.name}, City: ${person.city}`);
const { name, age } = person;
console.log(`Destructured - Name: ${name}, Age: ${age}`);
const student = {
    name: 'Bob',
    age: 22,
    address: {
        city: 'Los Angeles',
        country: 'USA'
    }
};
const { city: studentCity, country } = student.address;
console.log(`Student - City: ${studentCity}, Country: ${country}`);

const product = {
    name: 'Laptop',
    price: 1200
};
const { name: productName, category = 'general' } = product;
console.log(`Product - Name: ${productName}, Category: ${category}`);

function displayCar({ brand, model, year }) {
    console.log(`Car - Brand: ${brand}, Model: ${model}, Year: ${year}`);
}
displayCar({ brand: 'Tesla', model: 'Model S', year: 2020 });

const book = {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    publisher: 'Secker & Warburg'
};
const { year: bookYear, publisher, ...rest } = book;
console.log('Book:', rest, { bookYear, publisher });

const user = {
    name: 'Charlie',
    age: 25
};
const location = {
    city: 'San Francisco',
    country: 'USA'
};
const mergedObject = { ...user, ...location };
console.log('Merged Object:', mergedObject);

function sumNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log('Sum of Numbers:', sumNumbers(1, 2, 3, 4, 5));

document.getElementById('output').innerText = `
Person: ${JSON.stringify(person)}
Name: ${person.name}, City: ${person.city}
Destructured - Name: ${name}, Age: ${age}
Student - City: ${studentCity}, Country: ${country}
Product - Name: ${productName}, Category: ${category}
Car - Brand: Tesla, Model: Model S, Year: 2020
Book: ${JSON.stringify(rest)}, Year: ${bookYear}, Publisher: ${publisher}
Merged Object: ${JSON.stringify(mergedObject)}
Sum of Numbers: ${sumNumbers(1, 2, 3, 4, 5)}`;