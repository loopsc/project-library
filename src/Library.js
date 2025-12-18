export default class Library {
    constructor() {
        this.books = [];
    }

    addBookToLibrary(book) {
        this.books.push(book);
    }

    removeBookFromLibrary(book) {
        for (let i = 0; i < this.books.length; i++) {
            if (book.id === this.books[i].id) {
                this.books.splice(i, 1);
            }
        }
    }
}
