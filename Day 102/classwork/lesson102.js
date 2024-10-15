const outputDiv = document.getElementById('output');
// 1. Summing Unique Values
    const stringMap = new Map();
    const strings = ["apple", "banana", "cherry", "date", "fig", "grape"];
     strings.forEach(str => {
        stringMap.set(str, str.length);
    });
    const uniqueLengths = new Set(stringMap.values());
    const sumUniqueLengths = Array.from(uniqueLengths).reduce((sum, length) => sum + length, 0);
    outputDiv.innerHTML += `<p>Sum of unique lengths: ${sumUniqueLengths}</p>`;

// 2. Creating a Map of Objects by ID
    const objects = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    const objectMap = new Map(objects.map(obj => [obj.id, obj]));
    outputDiv.innerHTML += `<p>Map of objects by ID:</p>`;
    objectMap.forEach((value, key) => {
        outputDiv.innerHTML += `<p>ID: ${key}, Name: ${value.name}</p>`;
    });

// 3. Check for Required Value in Map
     const ageMap = new Map([
        ["Alice", 30],
        ["Bob", 25],
        ["Charlie", 35]
    ]);
    function checkNameExists(name) {
        return ageMap.has(name);
    }
    outputDiv.innerHTML += `<p>Alice exists: ${checkNameExists("Alice")}</p>`;
    outputDiv.innerHTML += `<p>David exists: ${checkNameExists("David")}</p>`;

// 4. Updating Data in Map
    const productPrices = new Map([
        ["apple", 1.00],
        ["banana", 0.50],
        ["cherry", 2.00]
    ]);
    function increasePrice(product) {
        if (productPrices.has(product)) {
            const newPrice = productPrices.get(product) * 1.1;
            productPrices.set(product, parseFloat(newPrice.toFixed(2)));
        }
    }
    increasePrice("banana");
    outputDiv.innerHTML += `<p>Updated price of banana: ${productPrices.get("banana")}</p>`;

// 5. Filtering Even Values from Map
    const numberMap = new Map([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6]
    ]);
    function getEvenValues(map) {
        const evenMap = new Map();
        for (const [key, value] of map) {
            if (value % 2 === 0) {
                evenMap.set(key, value);
            }
        }
        return evenMap;
    }
    const evenValues = getEvenValues(numberMap);
    outputDiv.innerHTML += `<p>Even values in map:</p>`;
    evenValues.forEach((value, key) => {
        outputDiv.innerHTML += `<p>${key}: ${value}</p>`;
    });

// 6. Removing Duplicates Using Set
    function removeDuplicates(arr) {
        return new Set(arr);
    }
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const uniqueNumbers = removeDuplicates(numbers);
    outputDiv.innerHTML += `<p>Unique numbers: ${Array.from(uniqueNumbers)}</p>`;

// 7. Iterating Through Set Elements
    const colorSet = new Set(["red", "green", "blue", "yellow"]);
    outputDiv.innerHTML += `<p>Colors:</p>`;
    for (const color of colorSet) {
        outputDiv.innerHTML += `<p>${color}</p>`;
    }
// 8. Finding Common Elements Between Two Sets
    function findCommonElements(setA, setB) {
        return new Set([...setA].filter(item => setB.has(item)));
    }
    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([3, 4, 5, 6]);
    const commonElements = findCommonElements(setA, setB);
    outputDiv.innerHTML += `<p>Common elements: ${Array.from(commonElements)}</p>`;

// 9. Union of Multiple Sets
    function unionOfSets(sets) {
        const unionSet = new Set();
        sets.forEach(set => {
            set.forEach(value => unionSet.add(value));
        });
        return unionSet;
    }
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([3, 4, 5]);
    const set3 = new Set([5, 6, 7]);
    const unionResult = unionOfSets([set1, set2, set3]);
    outputDiv.innerHTML += `<p>Union of sets: ${Array.from(unionResult)}</p>`;

    // 10. Deleting Elements from Set
    function removeAnimal(set, animal) {
        set.delete(animal);
        return set;
    }
    const animalSet = new Set(["dog", "cat", "rabbit"]);
    removeAnimal(animalSet, "cat");
    outputDiv.innerHTML += `<p>Animals after removal: ${Array.from(animalSet)}</p>`;