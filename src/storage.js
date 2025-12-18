import Book from "./Book";
import myLibrary from "./Library";

// Check if storage is available and supported
function storageAvailable(type) {
    let localStorage;
    try {
        localStorage = window[type];
        const x = "__storage_test__";
        localStorage.setItem(x, x);
        localStorage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            (e.name === "QuotaExceededError" ||
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            localStorage &&
            localStorage.length !== 0
        );
    }
}

function saveProjects() {
    if (!storageAvailable("localStorage")) return;

    const allBooks = myLibrary.books.map((book) => book.toJSON());

    localStorage.setItem("library", JSON.stringify(allBooks));

    console.log("Saved", allBooks);
}

function loadProjects() {
    if (!storageAvailable("localStorage")) {
        console.log("Storage unavailable");
        return;
    }

    const stored = localStorage.getItem("library");

    if (!stored) {
        throw new Error("Couldn't retrieve items from local storage");
    }

    const books = JSON.parse(stored);
    books.forEach((b) => {
        const book = Book.fromJSON(b);
        myLibrary.addBook(book);
    });

    console.log("Library loaded");
}

export { saveProjects, loadProjects };
