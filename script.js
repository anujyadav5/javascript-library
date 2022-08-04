let myLibrary = [];

function Book(title, author, pages, has_read) {
    this.title = title;
    this.author = author;
    this.page = pages;
    this.has_read = has_read;

    this.info = function() {

        return has_read ? `${title} by ${author}, ${pages} pages, read`:
        `${title} by ${author}, ${pages} pages, not read yet`;
    }
}

function addToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(arr) {
    for (book in arr) {
        console.log(book);
        display.innerHTML += `<div class="book"> 
            <div class="title">${book["title"]}</div>  
            <div class="author">${book["author"]}</div>  
            <div class="pages">${book["pages"]}</div>
            <div class="has-read">${
                book["has_read"]? "read": "unread"
            }</div>  
        </div>`;
    }
}

const display = document.getElementsByClassName("display")[0];

