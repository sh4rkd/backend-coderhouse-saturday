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

    //addBook
    addBook(book) {
        this.books.push(book);
    }

    //getBookNames
    getBookNames() {
        return this.books.join(', ');
    }
}

//create new user
const newUser = new User('Juan', 'Perez', ['The Lord of the Rings', 'The Hobbit', 'The Silmarillion'], 
    [
        {
            name: 'Fido',
            type: 'dog'
        },
        {
            name: 'Bella',
            type: 'cat'
        }
    ]
);

console.log(newUser.getFullName());
console.log(newUser.countPets());
console.log(newUser.getBookNames());
console.log(newUser.getPetNames());
newUser.addPet({
    name: 'Lucky',
    type: 'dog'
});
console.log(newUser.getPetNames());
console.log(newUser.countPets());
newUser.addBook('The Lord of the Rings');
console.log(newUser.getBookNames());
newUser.addBook('The Hobbit');
console.log(newUser.getBookNames());