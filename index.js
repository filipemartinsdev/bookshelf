import { booksList } from "./books.mjs";

const inputSearch = document.querySelector(".input-search")
const searchButton = document.querySelector(".button-search")

const booksOutput = document.querySelector(".container-cards");
const displayBooks = () => {
    for(let book of booksList){
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
                    <span class="book-rating">
                        Rating: ${book.rating}<ion-icon class="icon-check" name="checkbox-outline"></ion-icon> 
                    </span>
                    <span class="book-note">
                    ${book.note}
                    </span>
                </div>
        `
    }
}

displayBooks()

const searchBook = () => {
    console.clear()
    console.log("searching")
    booksOutput.innerHTML = ''
    const responseList = []

    for(let book of booksList){
        if(book.title.toUpperCase().includes(inputSearch.value.toUpperCase())){
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
                    <span class="book-rating">
                        Rating: ${book.rating}<ion-icon class="icon-check" name="checkbox-outline"></ion-icon> 
                    </span>
                    <span class="book-note">
                    ${book.note}
                    </span>
                </div>`;
            console.log(book.title)
            responseList.push(book.title)
        }
    }
    console.log("end")

    if(responseList.length === 0){
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
    if(event.key === "Enter"){
        if(document.activeElement === inputSearch){
            searchBook(inputSearch.value)
        }
    }
}

searchButton.addEventListener("click", searchBook)
document.addEventListener("keydown", eventKeyHandle)