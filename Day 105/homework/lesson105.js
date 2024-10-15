//დავალება_1
const immediatePromise = new Promise((resolve) => {
    resolve("Hello, Promise!");
});
immediatePromise.then((message) => {
    console.log(message);
});

//დავალება_2
const rejectionPromise = new Promise((_, reject) => {
    reject("Something went wrong!");
});
rejectionPromise.catch((error) => {
    console.error(error);
});

//დვალება_3
const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
});
timeoutPromise.then((message) => {
    console.log(message);
});

//დავალება_4
const randomOutcomePromise = new Promise((resolve, reject) => {
    Math.random() < 0.5 ? resolve("Success!") : reject("Failed!");
});
randomOutcomePromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
});

//დავალება_5
const chainPromise = new Promise((resolve) => {
    resolve(5);
});
chainPromise
    .then((number) => number * 2)
    .then((number) => number * 2)
    .then((number) => {
        console.log(number);
});

//დავალება_6
const networkRequestPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1000);
});

networkRequestPromise.then((message) => {
    console.log(message);
});