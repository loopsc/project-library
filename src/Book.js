export default class Book {
    constructor(title, author, pages, readStatus, id = null) {
        this.id = id ?? crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    changeReadStatus() {
        this.readStatus = !this.readStatus;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            pages: this.pages,
            readStatus: this.readStatus,
        };
    }

    static fromJSON(obj) {
        return new Book(
            obj.title,
            obj.author,
            obj.pages,
            obj.readStatus,
            obj.id
        );
    }
}
