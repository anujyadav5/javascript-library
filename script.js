let myLibrary = [];

class Book {
    constructor(title, author, pages, has_read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.has_read = has_read;
    }
    info = function () {

        return has_read ? `${title} by ${author}, ${pages} pages, read` :
            `${title} by ${author}, ${pages} pages, not read yet`;
    };
}

function addToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(arr) {
    display.innerHTML = '';
    for (book in arr) {
        display.innerHTML += `<div class="book"> 
            <div class="title">${arr[book].title}</div>  
            <div class="author"> - ${arr[book].author}</div>  
            <div class="pages">${arr[book].pages}</div>
            <div class="has-read">${
                arr[book].has_read? "Read": "Unread"
            }</div> 
            <button>Remove</button>
        </div>`;
    }

    const remove = document.querySelectorAll(".book button");
    Array.from(remove).forEach(bttn => bttn.addEventListener("click", () => {
        myLibrary.splice(Array.from(remove).indexOf(bttn), 1);
        displayBooks(myLibrary);
    }));
}

const display = document.getElementsByClassName("display")[0];
const addButton = document.getElementsByClassName("openForm")[0].getElementsByTagName("button")[0];
const form = document.getElementsByClassName("pop-up")[0];

addButton.addEventListener("click", () => {
    form.classList.remove("hide");
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.classList.add("hide");
    const formInfo = form.getElementsByTagName("input");
    new_book = new Book(formInfo[0].value, formInfo[1].value, formInfo[2].value, formInfo[3].checked ? true : false); 
    formInfo[0].value = '';
    formInfo[1].value = '';
    formInfo[2].value = '';
    formInfo[3].checked = false;
    myLibrary.push(new_book);
    displayBooks(myLibrary);
});

one = new Book("Man's Search for Meaning", "Viktor", 165, true);
two = new Book("Thus Spoke Zarathustra", "Nietszche", 327, true);

myLibrary.push(one);
myLibrary.push(two);

displayBooks(myLibrary);

