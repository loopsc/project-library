let instance;

class Library {
    constructor() {
        if (Library.instance) return Library.instance;
        instance = this;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(bookId) {
        this.books = this.books.filter((b) => b.id !== bookId);
    }
}

const myLibrary = new Library();
export default myLibrary;
