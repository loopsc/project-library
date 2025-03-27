const myLibrary = []

function Book(title, author, pages, readStatus) {
    if(!new.target) {
        throw Error("Must invoke 'new' argument")
    }

    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayLibrary() {
    const container = document.querySelector('.card_container')

    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card')

        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = `Pages: ${book.pages}`;

        const read_status = document.createElement('p');
        read_status.classList.add('read_status');
        pages.textContent = `Read: ${book.readStatus ? "Yes" : "No"}`

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read_status)

        container.appendChild(card)
    })
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book2 = new Book("1984", "George Orwell", 328, true);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book4 = new Book("Dune", "Frank Herbert", 412, false);
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, true);

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)

displayLibrary()



