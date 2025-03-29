const myLibrary = [];
const root = document.documentElement;

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

function createCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", book.id);

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
    read_status.textContent = `Read: ${book.readStatus ? "Yes" : "No"}`;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons_div");

    const flipReadButton = document.createElement("button");
    flipReadButton.textContent = "🔄 Edit read";
    flipReadButton.classList.add("card_buttons");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑 Delete";
    deleteButton.classList.add("card_buttons");

    // Changes the card bg colour to pink if not read
    if (!book.readStatus) {
        card.style.backgroundColor =
            getComputedStyle(root).getPropertyValue("--card-pink");
    }

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read_status);
    card.appendChild(buttonsDiv);
    buttonsDiv.appendChild(flipReadButton);
    buttonsDiv.appendChild(deleteButton);

    flipReadButton.addEventListener("click", () => {
        book.changeReadStatus();
        updateCardColour(book)
    });

    deleteButton.addEventListener("click", () => {
        removeBookFromLibrary(card.dataset.id);
        card.remove();
    });

    return card;
}

// Adds the book to the library array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Creates a card on the DOM for the corresponding book
function addBookToDisplay(book) {
    const container = document.querySelector('.card_container')
    const card = createCard(book)
    container.appendChild(card)
}

function removeBookFromLibrary(book) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (book.id === myLibrary[i].id) {
            myLibrary.splice(i, 1);
        }
    }
}

function updateCardColour(book) {
    const card = document.querySelector(`.card[data-id="${book.id}"]`);
    if (card) {
        const read_status = card.querySelector(".read_status");
        read_status.textContent = `Read: ${book.readStatus ? "Yes" : "No"}`;
        card.style.backgroundColor = book.readStatus
            ? getComputedStyle(root).getPropertyValue("--card-aqua")
            : getComputedStyle(root).getPropertyValue("--card-pink");
    }
}

Book.prototype.changeReadStatus = function () {
    this.readStatus = !this.readStatus;
};

function addBookAndDisplay(book) {
    addBookToLibrary(book)
    addBookToDisplay(book)
}

// Function for testing: Generates and adds books to the library
const generateTemplateBooks = () => {
    const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
    const book2 = new Book("1984", "George Orwell", 328, true);
    const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
    const book4 = new Book("Dune", "Frank Herbert", 412, false);
    const book5 = new Book(
        "The Sailor Who Fell from Grace with the Sea",
        "Yukio Mishima",
        277,
        true
    );
    const book6 = new Book("Pride and Prejudice", "Jane Austen", 432, true);
    const book7 = new Book("Moby-Dick", "Herman Melville", 635, false);
    const book8 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
    const book9 = new Book("War and Peace", "Leo Tolstoy", 1225, false);
    const book10 = new Book("The Odyssey", "Homer", 560, true);
    const book11 = new Book("Brave New World", "Aldous Huxley", 311, true);

    addBookAndDisplay(book1)
    addBookAndDisplay(book2)
    addBookAndDisplay(book3)
    addBookAndDisplay(book4)
    addBookAndDisplay(book5)
    addBookAndDisplay(book6)
    addBookAndDisplay(book7)
    addBookAndDisplay(book8)
    addBookAndDisplay(book9)
    addBookAndDisplay(book10)
    addBookAndDisplay(book11)
}

generateTemplateBooks()


const showDialogButton = document.querySelector(".btn_add_book");
const dialog = document.querySelector(".new_book_dialog");
const closeButton = document.querySelector(".btn_close");
const form = document.getElementById("frm_new_book");

showDialogButton.addEventListener("click", () => {
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

    addBookAndDisplay(book)

    form.reset();
    dialog.close();
});
