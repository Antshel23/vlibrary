// import the Media class:

// create your Book class:
const Media = require(`./Media`)

class Book extends Media {
    constructor(genre, year, title, author, numPages, rating) { //When passing parent through constructor, place first in the list
        super(genre, year, title);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    // Properly formatted summary method
    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    // Static method to return the book with the highest rating
    static highestRating(books) {
        if (books.length === 0) return null; // return null if the array is empty

        return books.reduce((highest, current) => {
            return current.rating > highest.rating ? current : highest;
        });
    }
}

// don't change below
module.exports = Book;

