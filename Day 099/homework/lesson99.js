class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
let myCar = new Car('Toyota', 'Camry');
document.getElementById('car-output').innerText = `Car Make: ${myCar.make}, Model: ${myCar.model}`;
class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited: ${amount}. New Balance: ${this.#balance}`;
        } else {
            return "Deposit amount must be positive.";
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrawn: ${amount}. New Balance: ${this.#balance}`;
        } else {
            return "Invalid withdrawal amount or insufficient funds.";
        }
    }
    getBalance() {
        return this.#balance;
    }
}
let myAccount = new BankAccount(1000);
document.getElementById('bank-account-output').innerText = `
    ${myAccount.deposit(500)}\n
    ${myAccount.withdraw(200)}\n
    Current Balance: ${myAccount.getBalance()}
`;

class MathOperations {
    static PI = 3.14159;

    static add(a, b) {
        return a + b;
    }
}
document.getElementById('math-operations-output').innerText = `
    Sum of 5 and 7: ${MathOperations.add(5, 7)}\n
    PI: ${MathOperations.PI}
`;

class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.setWidth(width);
        this.setHeight(height);
    }
    setWidth(width) {
        if (width > 0) {
            this.#width = width;
        } else {
            console.log("Width must be positive.");
        }
    }
    setHeight(height) {
        if (height > 0) {
            this.#height = height;
        } else {
            console.log("Height must be positive.");
        }
    }
    get area() {
        return this.#width * this.#height;
    }
}
let myRectangle = new Rectangle(10, 20);
document.getElementById('rectangle-output').innerText = `
    Rectangle Area: ${myRectangle.area}
`;
class User {
    #password;
    constructor(username) {
        this.username = username;
    }
    set password(password) {
        if (this.#validatePassword(password)) {
            this.#password = password;
            console.log("Password set successfully.");
        } else {
            console.log("Password is too weak.");
        }
    }

    #validatePassword(password) {
        return password.length >= 6;
    }
}

let user1 = new User("john_doe");
user1.password = "strong123";
document.getElementById('user-output').innerText = `User: ${user1.username}, Password set successfully`;

class Book {
    #pages;

    constructor(title, pages) {
        this.title = title;
        this.#pages = pages;
    }
    get numberOfPages() {
        return this.#pages;
    }
    set numberOfPages(pages) {
        if (pages > 0) {
            this.#pages = pages;
        } else {
            console.log("Pages must be positive.");
        }
    }
}
let myBook = new Book("JavaScript Mastery", 300);
myBook.numberOfPages = 350;
document.getElementById('book-output').innerText = `
    Book Title: ${myBook.title}, Pages: ${myBook.numberOfPages}
`;

class Player {
    static playerCount = 0;
    constructor(name) {
        this.name = name;
        Player.playerCount += 1;
    }

    static getPlayerCount() {
        return Player.playerCount;
    }
}
let player1 = new Player("John");
let player2 = new Player("Jane");
document.getElementById('player-output').innerText = `
    Player count: ${Player.getPlayerCount()}
`;
class Vehicle {
    #speed;

    constructor(speed) {
        this.#speed = speed;
    }
    setSpeed(speed) {
        this.#speed = speed;
    }
    getSpeed() {
        return this.#speed;
    }
}
class Bike extends Vehicle {
    constructor(speed, brand) {
        super(speed);
        this.brand = brand;
    }
    bikeInfo() {
        return `Bike brand: ${this.brand}, Speed: ${this.getSpeed()}`;
    }
}

let myBike = new Bike(80, "Yamaha");
document.getElementById('bike-output').innerText = myBike.bikeInfo();

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    static compareGrades(student1, student2) {
        if (student1.grade > student2.grade) {
            return `${student1.name} has a higher grade.`;
        } else if (student1.grade < student2.grade) {
            return `${student2.name} has a higher grade.`;
        } else {
            return "Both students have the same grade.";
        }
    }
}

let student1 = new Student("Alice", 90);
let student2 = new Student("Bob", 85);
document.getElementById('student-output').innerText = Student.compareGrades(student1, student2);