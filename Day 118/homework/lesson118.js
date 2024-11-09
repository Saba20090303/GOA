class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;
    }

    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available for borrowing.`);
        }
    }
    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
    getSummary() {
        return `${this.title} (${this.year}) - Availability: ${this.isAvailable ? 'Available' : 'Borrowed'}`;
    }
}
class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year);
        this.author = author;
        this.genre = genre;
    }
    getSummary() {
        return `${super.getSummary()} - Author: ${this.author}, Genre: ${this.genre}`;
    }
}
class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year);
        this.issueNumber = issueNumber;
    }

    getSummary() {
        return `${super.getSummary()} - Issue Number: ${this.issueNumber}`;
    }
}

const myBook = new Book('The Great Gatsby', 1925, 'F. Scott Fitzgerald', 'Classic Fiction');
const myMagazine = new Magazine('National Geographic', 2024, 'Vol. 1, Issue 5');
let libraryItems = [myBook, myMagazine];
function displayItems() {
    const libraryItemsDiv = document.getElementById('libraryItems');
    libraryItemsDiv.innerHTML = '';
    libraryItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>${item.getSummary()}</p>`;
        libraryItemsDiv.appendChild(itemDiv);
    });
}

function borrowBook() {
    myBook.borrowItem();
    displayItems();
}
function returnBook() {
    myBook.returnItem();
    displayItems();
}
function borrowMagazine() {
    myMagazine.borrowItem();
    displayItems();
}
function returnMagazine() {
    myMagazine.returnItem();
    displayItems();
}
displayItems();