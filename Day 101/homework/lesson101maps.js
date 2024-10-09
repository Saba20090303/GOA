//დავალება_1
const cityPopulation = new Map([
    ["Tbilisi", 1100000],
    ["Kutaisi", 140000],
    ["Batumi", 160000]
 ]);
  
  console.log(cityPopulation);

//დავალება_2
cityPopulation.set("Tbilisi", 1200000);
console.log(cityPopulation.get("Tbilisi"));

//დავალება_3
const currencies = new Map([
    ["USD", "Dollar"],
    ["EUR", "Euro"],
    ["JPY", "Yen"]
  ]);
  
for (const [code, name] of currencies) {
console.log(`${code} => ${name}`);
}

//დავალება_4
const productPrices = new Map([
    ["Apple", 2],
    ["Banana", 1],
    ["Orange", 3]
  ]);
  
const productQuantities = new Map([
    ["Apple", 10],
    ["Banana", 5],
    ["Orange", 7]
]);
  
const totalPrices = new Map();
productPrices.forEach((price, product) => {
const quantity = productQuantities.get(product);
totalPrices.set(product, price * quantity);
});
  
console.log(totalPrices);

//დავალება_5
const countries = new Map([
    ["Georgia", "Tbilisi"],
    ["USA", "Washington"],
    ["Japan", "Tokyo"]
]);
  
const clonedCountries = new Map(countries);
console.log(clonedCountries);

//დავალება_6
const gameRatings = new Map([
    ["Minecraft", 9.0],
    ["Fortnite", 8.5],
    ["Among Us", 7.8]
]);
  
console.log(`Total games: ${gameRatings.size}`);

//დავალება_7
const products = new Map([
    ["Milk", 1.5],
    ["Bread", 2],
    ["Butter", 3]
]);
  
products.forEach((value, key) => {
products.delete(key);
console.log(`${key} has been deleted`);
});
  
  console.log(products.size);

//დავალება_8
const sports = new Map([
    ["Football", 11],
    ["Basketball", 5],
    ["Tennis", 2]
]);
  
const sportsArray = Array.from(sports);
console.log(sportsArray);

//დავალება_9
const animals = new Map([
    ["Lion", "Savannah"],
    ["Penguin", "Antarctica"],
    ["Elephant", "Savannah"]
]);
  
const habitat = "Savannah";
const animalsInHabitat = [];
  
animals.forEach((location, animal) => {
    if (location === habitat) {
      animalsInHabitat.push(animal);
    }
});
  
console.log(animalsInHabitat);

//დავალება_10
const students = new Map([
    ["John", 85],
    ["Jane", 90],
    ["Jim", 78],
    ["Jill", 92]
]);
  
const averageScore = Array.from(students.values()).reduce((sum, score, _, array) => {
return sum + score / array.length;
}, 0);
  
console.log(`Average Score: ${averageScore}`);