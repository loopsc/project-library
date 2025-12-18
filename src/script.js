import "./styles.css";
import BookCard from "./BookCard.js";
import Book from "./Book.js";
import Library from "./Library.js";
import * as Utils from "./utils.js";

const myLibrary = new Library();

function addBookAndDisplay(book) {
    const container = document.querySelector(".card_container");

    myLibrary.addBookToLibrary(book);
    new BookCard(book).renderCard(container);
}

// Function for testing: Generates and adds books to the library
const generateTemplateBooks = () => {
    const books = Utils.booksData.map(
        ([title, author, pages, read]) => new Book(title, author, pages, read)
    );

    books.forEach((book) => addBookAndDisplay(book));
};
generateTemplateBooks();

const addBookBtn = document.querySelector(".btn_add_book");
const dialog = document.querySelector(".new_book_dialog");
const closeButton = document.querySelector(".btn_close");
const form = document.getElementById("frm_new_book");

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

// Clear the form and close the form
closeButton.addEventListener("click", (e) => {
    // Prevent page from auto refresh
    e.preventDefault();

    form.reset();
    dialog.close();
});

// Add a new book to the library and clears the form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formInputTitle = document.getElementById("form_title");
    const formInputAuthor = document.getElementById("form_author");
    const formInputPages = document.getElementById("form_pages");
    const formInputRead = document.getElementById("form_read_status");

    title = formInputTitle.value;
    author = formInputAuthor.value;
    pages = formInputPages.value;
    read = formInputRead.checked;

    const book = new Book(title, author, pages, read);

    addBookAndDisplay(book);

    form.reset();
    dialog.close();
});
