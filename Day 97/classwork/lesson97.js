const form = document.querySelector('form');

const accounts = [];

class Account {
    constructor(firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    printDetails() {
        console.log(`Firstname: ${this.firstname}`);
        console.log(`Lastname: ${this.lastname}`);
        console.log(`Email: ${this.email}`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;

    const account = new Account(firstname, lastname, email);
    account.printDetails();
    accounts.push(account);
})

// როგორ მუშაობს ჯავასკრიპტში ქლასები
// კლასი არის შაბლონი ობიექტების შესაქმნელად. ის აერთიანებს მონაცემებს კოდით, რომ იმუშაოს ამ მონაცემებზე. JavaScript-ში კლასები აგებულია პროტოტიპებზე, რაც ნიშნავს, რომ ისინი იყენებენ არსებულ პროტოტიპურ მემკვიდრეობის მექანიზმს.
// კლასი, როგორც წესი, შედგება კონსტრუქტორისა და მეთოდებისგან. კონსტრუქტორი არის სპეციალური მეთოდი, რომელსაც ეწოდება კლასიდან ობიექტის შექმნისას. იგი გამოიყენება ობიექტის თვისებების ინიციალიზაციისთვის.
// აქ არის მარტივი კლასის მაგალითი JavaScript-ში:
// class Rectangle {
//     constructor(height, width) {
//       this._height = height;
//       this._width = width;
//     }
//     get height() {
//       return this._height;
//     }
//     set height(value) {
//       this._height = value;
//     }
//     get width() {
//       return this._width;
//     } 
//     set width(value) {
//       this._width = value;
//     }
//   }