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