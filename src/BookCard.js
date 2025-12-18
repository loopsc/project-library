const root = document.documentElement;

export default class BookCard {
    constructor(book) {
        this.book = book;
        this.card = this.createCard();
    }

    createCard() {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", this.book.id);

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = `Title: ${this.book.title}`;

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = `Author: ${this.book.author}`;

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = `Pages: ${this.book.pages}`;

        const read_status = document.createElement("p");
        read_status.classList.add("read_status");
        read_status.textContent = `Read: ${
            this.book.readStatus ? "Yes" : "No"
        }`;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons_div");

        const flipReadButton = document.createElement("button");
        flipReadButton.textContent = "🔄 Edit read";
        flipReadButton.classList.add("card_buttons");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑 Delete";
        deleteButton.classList.add("card_buttons");

        // Changes the card bg colour to pink if not read
        if (!this.book.readStatus) {
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
            this.book.changeReadStatus();
            this.updateCardColour();
        });

        deleteButton.addEventListener("click", () => {
            myLibrary.removeBookFromLibrary(card.dataset.id);
            card.remove();
        });

        return card;
    }

    updateCardColour() {
        const card = this.card;
        if (card) {
            const read_status = card.querySelector(".read_status");
            read_status.textContent = `Read: ${
                this.book.readStatus ? "Yes" : "No"
            }`;
            card.style.backgroundColor = this.book.readStatus
                ? getComputedStyle(root).getPropertyValue("--card-aqua")
                : getComputedStyle(root).getPropertyValue("--card-pink");
        }
    }

    /**
     * Appends this card to a parent container in the DOM
     * @param {HTMLElement} parentElement - The container to append the card to
     */
    renderCard(parentElement) {
        parentElement.appendChild(this.card);
    }
}
