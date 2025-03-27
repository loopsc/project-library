const myLibrary = [];

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("Must invoke 'new' argument");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const root = document.documentElement;

function displayLibrary() {
    const container = document.querySelector(".card_container");
    container.textContent = ''

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = `Pages: ${book.pages}`;

        const read_status = document.createElement("p");
        read_status.classList.add("read_status");
        pages.textContent = `Read: ${book.readStatus ? "Yes" : "No"}`;

        if (!book.readStatus) {
            card.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-pink');
        }

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read_status);

        container.appendChild(card);
    });
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book2 = new Book("1984", "George Orwell", 328, true);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book4 = new Book("Dune", "Frank Herbert", 412, false);
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, true);
const book6 = new Book("Pride and Prejudice", "Jane Austen", 432, true);
const book7 = new Book("Moby-Dick", "Herman Melville", 635, false);
const book8 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const book9 = new Book("War and Peace", "Leo Tolstoy", 1225, false);
const book10 = new Book("The Odyssey", "Homer", 560, true);
const book11 = new Book("Brave New World", "Aldous Huxley", 311, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);
addBookToLibrary(book11);

displayLibrary()

const showDialogButton = document.querySelector('.btn_add_book')
const dialog = document.querySelector('.new_book_dialog')
const submitButton = document.querySelector('.btn_submit')
const closeButton = document.querySelector('.btn_close')
const form = document.getElementById("frm_new_book");

const formInputTitle = document.getElementById("form_title");
const formInputAuthor = document.getElementById("form_author");
const formInputPages = document.getElementById("form_pages");
const formInputRead = document.getElementById("form_read_status");

showDialogButton.addEventListener('click', () => {
    dialog.showModal()
})

closeButton.addEventListener('click', (e) => {
    e.preventDefault()

    form.reset()
    dialog.close()
    
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    title = formInputTitle.value;
    author = formInputAuthor.value;
    pages = formInputPages.value;
    read = formInputRead.checked;

    const book = new Book(title, author, pages, read)

    addBookToLibrary(book)

    displayLibrary()
    
    form.reset()
    dialog.close()
})
