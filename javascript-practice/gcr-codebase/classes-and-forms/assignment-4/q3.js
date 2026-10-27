class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("The Hobbit", "J. R. R. Tolkien", "978-0261102217"),
  new Book("Kindred", "Octavia E. Butler", "978-0807083697"),
];
books[0].issueBook();
console.log("Available books:", books.filter((book) => !book.isIssued));

const requestedIsbn = "978-0807083697";
const requestedBook = books.find((book) => book.isbn === requestedIsbn);
console.log(requestedBook ? `Issued: ${requestedBook.issueBook()}` : "Book not found.");
