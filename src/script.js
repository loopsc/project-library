import "./styles.css";
import BookCard from "./BookCard.js";
import Book from "./Book.js";
import * as Utils from "./utils.js";
import myLibrary from "./Library.js";
import { saveProjects, loadProjects } from "./storage.js";

const container = document.querySelector(".card_container");

function addBookAndDisplay(book) {
    myLibrary.addBook(book);

    new BookCard(book).renderCard(container);
}

const displayBooks = () => {
    myLibrary.books.forEach((b) => new BookCard(b).renderCard(container));
};

console.log(myLibrary.books);

loadProjects();

displayBooks();

// Function for testing: Generates and adds books to the library
const generateTemplateBooks = () => {
    const books = Utils.booksData.map(
        ([title, author, pages, read]) => new Book(title, author, pages, read)
    );

    books.forEach((book) => addBookAndDisplay(book));
};
// generateTemplateBooks();

// ===Form/Modal===

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

    const title = document.getElementById("form_title").value;
    const author = document.getElementById("form_author").value;
    const pages = document.getElementById("form_pages").value;
    const read = document.getElementById("form_read_status").checked;

    const book = new Book(title, author, pages, read);

    addBookAndDisplay(book);

    saveProjects();

    form.reset();
    dialog.close();
});
