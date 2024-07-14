var book1Title;
var book1Author;

bookTitle1 = "The Hobbit";
bookAuthor1 = "J. R. R. Tolkien";

console.log(bookTitle1 + " by " + bookAuthor1);

var bookTitle2 = "1984";
var bookAuthor2 = "George Orwell";

console.log(bookTitle2 + " by " + bookAuthor2);

var bookTitle3 = "To Kill a Mockingbird";
var bookAuthor3 = "Harper Lee";

console.log(bookTitle3 + " by " + bookAuthor3);

var books = [
    { title: "The Hobbit", author: "J. R. R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" }
];


for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
}

var books100 = [];
for (var i = 1; i <= 100; i++) {
    books100.push({ title: "Book Title " + i, author: "Author " + i });
}

for (var i = 0; i < books100.length; i++) {
    console.log(books100[i].title + " by " + books100[i].author);
}