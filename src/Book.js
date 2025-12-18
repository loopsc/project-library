export default class Book {
    constructor(title, author, pages, readStatus) {
        this._id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    changeReadStatus() {
        this.readStatus = !this.readStatus;
    }
}
