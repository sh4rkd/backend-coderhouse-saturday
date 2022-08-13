//class user with constructor
class User {
    constructor(name, surName, books, pets) {
        this.name = name;
        this.surName = surName;
        this.books = books;
        this.pets = pets;
    }

    //getFullName
    getFullName() {
        return `${this.name} ${this.surName}`;
    }

    //addPet
    addPet(pet) {
        this.pets.push(pet);
    }

    //getPetNames
    getPetNames() {
        return this.pets.map(pet => pet.name);
    }

    //countPets
    countPets() {
        return this.pets.length;
    }

    //addBook with author
    addBook(book, author) {
        this.books.push({
            title: book,
            author: author
        });
    }

    //getBookNames
    getBookNames() {
        return this.books.map(book => book.title);
    }
}

//create new user
const user = new User('Juan', 'Perez', [], []);

//add pet to user
user.addPet({
    name: 'Fido',
    type: 'dog'
});

//add book to user
user.addBook('Harry Potter', 'J.K. Rowling');

console.log(user.getFullName());
console.log(user.getPetNames());
console.log(user.countPets());
console.log(user.getBookNames());

