import { booksList } from "./books.mjs";

const inputSearch = document.querySelector(".input-search")
const searchButton = document.querySelector(".button-search")
const booksOutput = document.querySelector(".container-cards");
const containerReading = document.querySelector(".container-readingbooks");

const displayBooks = () => {
    for (let book of booksList) {
        const bookStatus = book.status;
        const rate = book.rating
        let rateColor
        if(rate < 5){
            rateColor = "red"
        } else if(rate >= 4 && rate <= 7){
            rateColor = "yellow"
        } else if(rate > 7){
            rateColor = "green"
        }

        if(bookStatus === "read") {
            booksOutput.innerHTML += `
            <div class="card">
                <div class="container-card-image">
                    <img class="card-image" src="${book.image}" alt="book-image">
                </div>

                <div class="container-card-info">
                    <span class="book-title">
                        ${book.title}
                    </span>
                    <span class="book-author">
                        ${book.author}
                    </span>
                    <span class="book-status">
                        <span class="book-status-label">
                            Status:
                        </span>
                        <span class="book-status-response">
                            ${bookStatus}  
                            <div class="icon-${bookStatus}"></div> 
                        </span>
                    </span>
                    <span title="This is MY rating for this book." class="book-rating rate-${rateColor}">
                        Rating: ${book.rating}<ion-icon class="icon-check" name="checkbox-outline"></ion-icon> 
                    </span>
                    <span class="book-note">
                        ${book.note}
                    </span>
                </div>`;
        } else if( bookStatus === "unread") {
            booksOutput.innerHTML += `
            <div class="card">
                <div class="container-card-image">
                    <img class="card-image" src="${book.image}" alt="book-image">
                </div>

                <div class="container-card-info">
                    <span class="book-title">
                        ${book.title}
                    </span>
                    <span class="book-author">
                        ${book.author}
                    </span>
                    <span class="book-status">
                        <span class="book-status-label">
                            Status:
                        </span>
                        <span class="book-status-response">
                            ${bookStatus}  
                            <div class="icon-${bookStatus}"></div> 
                        </span>
                    </span>
                    <span class="book-note">
                        ${book.note}
                    </span>
                </div>`
        } else if( bookStatus === "reading"){
            containerReading.innerHTML += `
            <div class="card">
                <div class="container-card-image">
                    <img class="card-image" src="${book.image}" alt="book-image">
                </div>
                <div class="container-card-info">
                    <span class="book-title">
                        ${book.title}
                    </span>
                    <span class="book-author">
                        ${book.author}
                    </span>
                    <span class="book-status">
                        <span class="book-status-label">
                            Status:
                        </span>
                        <span class="book-status-response">
                            ${bookStatus}  
                            <div class="icon-${bookStatus}"></div> 
                        </span>
                    </span>
                    <span class="book-note">
                        ${book.note}
                    </span>
                </div>`;
        }
    }
}

displayBooks()

const searchBook = () => {
    console.clear()
    console.log("searching")
    booksOutput.innerHTML = ''
    const responseList = []

    for (let book of booksList) {
        const bookStatus = book.status;
        containerReading.innerHTML = ""

        const rate = book.rating
        let rateColor
        if(rate < 5){
            rateColor = "red"
        } else if(rate >= 4 && rate <= 7){
            rateColor = "yellow"
        } else if(rate > 7){
            rateColor = "green"
        }

        if (book.title.toUpperCase().includes(inputSearch.value.toUpperCase())) {
            if(bookStatus === "read") {
                booksOutput.innerHTML += `<div class="card">
                    <div class="container-card-image">
                        <img class="card-image" src="${book.image}" alt="book-image">
                    </div>

                    <div class="container-card-info">
                        <span class="book-title">
                            ${book.title}
                        </span>
                        <span class="book-author">
                            ${book.author}
                        </span>
                        <span class="book-status">
                            <span class="book-status-label">
                                Status:
                            </span>
                            <span class="book-status-response">
                                ${bookStatus}  
                            <div class="icon-${bookStatus}"></div> 
                        </span>
                    </span>
                        <span title="This is MY rating for this book." class="book-rating rate-${rateColor}">
                            Rating: ${book.rating}<ion-icon class="icon-check" name="checkbox-outline"></ion-icon> 
                        </span>
                        <span class="book-note">
                            ${book.note}
                        </span>
                    </div>`;
                }

                if(bookStatus === "unread"){
                    booksOutput.innerHTML += `<div class="card">
                    <div class="container-card-image">
                        <img class="card-image" src="${book.image}" alt="book-image">
                    </div>
    
                    <div class="container-card-info">
                        <span class="book-title">
                            ${book.title}
                        </span>
                        <span class="book-author">
                            ${book.author}
                        </span>
                        <span class="book-status">
                            <span class="book-status-label">
                                Status:
                            </span>
                            <span class="book-status-response">
                                ${bookStatus}  
                            <div class="icon-${bookStatus}"></div> 
                        </span>
                        </span>
                        <span class="book-note">
                        ${book.note}
                        </span>
                    </div>`;
                }

                if(bookStatus === "reading") {
                    booksOutput.innerHTML += `<div class="card">
                <div class="container-card-image">
                    <img class="card-image" src="${book.image}" alt="book-image">
                </div>

                <div class="container-card-info">
                    <span class="book-title">
                        ${book.title}
                    </span>
                    <span class="book-author">
                        ${book.author}
                    </span>
                    <span class="book-status">
                        <span class="book-status-label">
                            Status:
                        </span>
                        <span class="book-status-response">
                            ${bookStatus}  
                            <div class="icon-${bookStatus}"></div> 
                        </span>
                    </span>
                    <span class="book-note">
                        ${book.note}
                    </span>
                </div>`;
                }

            console.log(book.title)
            responseList.push(book.title)
        }
    }
    console.log("end")

    if (responseList.length === 0) {
        console.log("No response")

        booksOutput.innerHTML = `
            <div class="card-booksfound">
                <span>
                    0 books found.
                </span>
            </div>
        `
    }
}

const eventKeyHandle = (event) => {
    console.clear()
    console.log(event)
    if (event.key === "Enter") {
        if (document.activeElement === inputSearch) {
            searchBook(inputSearch.value)
        }
    }
}

searchButton.addEventListener("click", searchBook)
document.addEventListener("keydown", eventKeyHandle)