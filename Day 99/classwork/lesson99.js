class User {
    firstName;
    lastName;
    age;
    #id;
    #isValid;

    static userCount = 0;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.#id = User.userCount + 1;
        this.#isValid = this.#validateUser();
        if (this.#isValid) {
            User.userCount++;
        }
    }
    get userDetails() {
        return `${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

    static getUserCount() {
        return User.userCount;
    }

    #validateUser() {
        return this.age > 0 && this.firstName.trim() !== '' && this.lastName.trim() !== '';
    }
}

const form = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');
const userCountDisplay = document.getElementById('userCount');
const userList = document.getElementById('userList');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const newUser = new User(firstName, lastName, age);

    if (newUser.userDetails) {
        errorMessage.textContent = '';
        const userItem = document.createElement('div');
        userItem.textContent = newUser.userDetails;
        userList.appendChild(userItem);
        userCountDisplay.textContent = User.getUserCount();

        form.reset();
    } else {
        errorMessage.textContent = 'Invalid input. Please check your details.';
    }
});