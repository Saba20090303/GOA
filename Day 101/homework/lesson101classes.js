//დავალება_1_2_3
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    displayInfo() {
      console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    static compareUsers(user1, user2) {
      if (user1.email === user2.email) {
        console.log("Emails are the same.");
      } else {
        console.log("Emails are different.");
      }
    }
  }
const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");
user1.displayInfo();
user2.displayInfo();

User.compareUsers(user1, user2);

//დავალება_4
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      console.log("Price must be positive!");
    }
  }
}

const product = new Product("Laptop", 1000);
console.log(product.price);
product.price = -500;
product.price = 1500;
console.log(product.price);

//დავალება_5_6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }
  getDetails() {
    super.getDetails();
    console.log(`Student ID: ${this.studentID}`);
  }
}
const student = new Student("Alice", 22, "S12345");
student.getDetails();

//დავალება_7
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance!");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
    }
  }
}
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(1500);

//დავალება_8
class Appliance {
  constructor(power) {
    this._power = power;
  }
}
class WashingMachine extends Appliance {
  constructor(power, brand) {
    super(power);
    this.brand = brand;
  }
  displayDetails() {
    console.log(`Power: ${this._power}W, Brand: ${this.brand}`);
  }
}
const washer = new WashingMachine(500, "LG");
washer.displayDetails();

//დავალება_9
class Counter {
  static count = 0;

  static increment() {
    Counter.count += 1;
    console.log(`Count: ${Counter.count}`);
  }
}
Counter.increment();
Counter.increment();

//დავალება_10
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  displayTitle() {
    console.log(`Title: ${this.title}`);
  }
}
const books = [
  new Book("1984", "George Orwell"),
  new Book("To Kill a Mockingbird", "Harper Lee"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald")
];
books.forEach(book => book.displayTitle());
