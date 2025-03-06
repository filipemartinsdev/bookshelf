import { booksList } from "./books.mjs";

const inputSearch = document.querySelector(".input-search");
const searchButton = document.querySelector(".button-search");
const booksOutput = document.querySelector(".container-cards");
const containerReading = document.querySelector(".container-readingbooks");

const displayBooks = (search) => (filter) => {
    if (search == undefined) search = "";

    booksOutput.innerHTML = "";
    containerReading.innerHTML = "";

    let booksFounded = 0;

    for (let book of booksList) {
        if (book.title.toUpperCase().includes(search.toUpperCase())) {
            booksFounded++
            const bookStatus = book.status;
            let container;
            if (bookStatus == "reading") {
                container = containerReading;
            } else container = booksOutput;

            // console.log(container)
            let rateColor
            if (book.rating <= 4.5) rateColor = "red";
            else if (book.rating > 4.5 && book.rating <= 6.5) rateColor = "yellow";
            else if (book.rating > 6.5) rateColor = "green";

            let display_book_status_read = "display-none";
            let display_book_status_unread = "display-none";
            let display_book_status_reading = "display-none";

            if (bookStatus == "read") {
                display_book_status_read = "visible";
            }
            else if (bookStatus == "unread") {
                display_book_status_unread = "visible";
            }
            else if (bookStatus == "reading") {
                display_book_status_reading = "visible";
            }

            let displayRating;
            if (book.status == "read") displayRating = "visible";
            else displayRating = "display-none";

            let displayFooter
            if (book.status == "read") displayFooter = "visible";
            else displayFooter = "display-none";

            container.innerHTML += `
                <div class="card">
                    <div class="container-card-image">
                        <img class="card-image" src="${book.image}" alt="book-image">
                    </div>

                    <div class="container-card-info">
                        <div class="container-book-top-info">
                            <span class="book-title">
                                ${book.title}
                            </span>
                            <span class="book-subtitle">
                                ${book.subtitle}
                            </span>
                            <span class="book-author">
                                ${book.author}
                            </span>
                            <span class="book-publisher">
                                Editora ${book.publisher}
                            </span>
                        </div>

                        <div class="container-book-sub-info">
                            <span>${book.pages} Páginas</span>            
                        
                            <div class="book-status">
                                <span class="book-status-label">
                                    Status:
                                </span>

                                <span class="${display_book_status_read} book-status-response">
                                    Lido
                                    <div class="icon-read">✅</div> 
                                </span>
                                
                                <span class="${display_book_status_unread} book-status-response">
                                    Não lido
                                    <div class="icon-unread">❌</div> 
                                </span>

                                <span class="${display_book_status_reading} book-status-response">
                                    Lendo
                                    <div class="icon-reading"></div> 
                                </span>
                            </div>

                            <span title="This is MY rating for this book." class="book-rating rate-${rateColor} ${displayRating}">
                                Rating: ${book.rating} 
                            </span>
                        </div>

                        <div class="container-card-footer ${displayFooter}">
                            <button class="button-read-more" id="${book.id}">
                                Ver mais
                                <ion-icon class="icon-expand" name="expand-outline"></ion-icon> 
                            </button>
                        </div>
                    </div>
            `;
        }
    }

    if (booksFounded == 0) {
        console.log("No one book founded");
        booksOutput.innerHTML = `
            <div class="card-booksfound">
                <span>
                    0 books found.
                </span>
            </div>
    `;
    }
}

displayBooks()()

const eventKeyHandle = (event) => {
    // console.clear();
    // console.log(event.key)
    if (event.key === "Enter") {
        if (document.activeElement === inputSearch) {
            displayBooks(inputSearch.value)();
        }
    }
}

document.addEventListener("keydown", eventKeyHandle);

searchButton.addEventListener("click", () => displayBooks(inputSearch.value)());