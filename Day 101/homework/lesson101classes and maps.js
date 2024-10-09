//დავალება_1
class Library {
    constructor() {
      this.books = new Map();
    }
  
    addBook(title, author) {
      this.books.set(title, author);
    }
  
    getBooks() {
      return this.books;
    }
}
  
const myLibrary = new Library();
myLibrary.addBook("1984", "George Orwell");
myLibrary.addBook("Brave New World", "Aldous Huxley");
console.log(myLibrary.getBooks());

//დავალება_2
class Store {
    constructor() {
      this.products = new Map();
    }
  
    addProduct(product, price) {
      this.products.set(product, price);
    }
  
    getPrice(product) {
      return this.products.get(product);
    }
}
const store = new Store();
store.addProduct("Apple", 1.5);
store.addProduct("Banana", 1.2);
console.log(store.getPrice("Apple"));

//დავალება_3
class PhoneBook {
    constructor() {
      this.contacts = new Map();
    }
  
    addContact(name, phone) {
      this.contacts.set(phone, name);
    }
  
    getContact(phone) {
      return this.contacts.get(phone);
    }
  }
  
const phoneBook = new PhoneBook();
phoneBook.addContact("John Doe", "555-1234");
console.log(phoneBook.getContact("555-1234"));

//დავალება_4
class Zoo {
    constructor() {
      this.animals = new Map();
    }
    addAnimal(name, quantity) {
      this.animals.set(name, quantity);
    }
  
    listAnimals() {
      return Array.from(this.animals.entries());
    }
}
  
const zoo = new Zoo();
zoo.addAnimal("Lion", 5);
zoo.addAnimal("Elephant", 3);
console.log(zoo.listAnimals());

//დავალება_5
class Inventory {
    constructor() {
      this.items = new Map();
    }
    addItem(item, quantity) {
      this.items.set(item, quantity);
    }
}
  class StoreInventory extends Inventory {
    getStock(item) {
      return this.items.get(item);
    }
}
const storeInventory = new StoreInventory();
storeInventory.addItem("Laptop", 10);
console.log(storeInventory.getStock("Laptop"));

//დავალება_6
class Classroom {
    constructor() {
      this.students = new Map();
    }
    addStudent(id, score) {
      this.students.set(id, score);
    }
    getAverageScore() {
      const total = Array.from(this.students.values()).reduce((acc, score) => acc + score, 0);
      return total / this.students.size;
    }
  }

const classroom = new Classroom();
classroom.addStudent(1, 85);
classroom.addStudent(2, 90);
classroom.addStudent(3, 78);
console.log(classroom.getAverageScore());

//დავალება_7
class CountryDirectory {
    constructor(countries) {
      this.countries = new Map(countries);
    }
    getCapital(country) {
      return this.countries.get(country);
    }
}
const countries = new Map([
    ["Georgia", "Tbilisi"],
    ["USA", "Washington, D.C."],
    ["France", "Paris"]
]);
const directory = new CountryDirectory(countries);
console.log(directory.getCapital("Georgia"));

//დავალება_8
class ShoppingCart {
    constructor() {
      this.cart = new Map();
    }
    addItem(product, quantity) {
      if (this.cart.has(product)) {
        this.cart.set(product, this.cart.get(product) + quantity);
      } else {
        this.cart.set(product, quantity);
      }
    }
    getTotalItems() {
      let total = 0;
      this.cart.forEach(quantity => total += quantity);
      return total;
    }
}
const cart = new ShoppingCart();
cart.addItem("Apple", 3);
cart.addItem("Banana", 2);
cart.addItem("Apple", 1);
console.log(cart.getTotalItems());

//დავალება_9
class RestaurantMenu {
    constructor(menu) {
      this.menu = new Map(menu);
    }
    getItemPrice(item) {
      return this.menu.get(item);
    }
} 
const menu = new Map([
    ["Pizza", 12],
    ["Pasta", 10],
    ["Salad", 7]
]);
const restaurant = new RestaurantMenu(menu);
console.log(restaurant.getItemPrice("Pizza"));

//დავალება_10
class StudentGrades {
    constructor(grades) {
      this.grades = new Map(grades);
    }
  
    getTopStudent() {
      let topStudent = "";
      let highestGrade = -1;
  
    this.grades.forEach((grade, student) => {
        if (grade > highestGrade) {
          highestGrade = grade;
          topStudent = student;
        }
    });
  
    return topStudent;
    }
}
  
const grades = new Map([
    ["John", 85],
    ["Jane", 92],
    ["Jim", 78]
]);
const studentGrades = new StudentGrades(grades);
console.log(studentGrades.getTopStudent());