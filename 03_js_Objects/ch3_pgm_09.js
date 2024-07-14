var book1 = {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    published: 1937 
};

//the second book 
var book2 = {
    title: "Northern Lights",
    author: "Philip Pullman",
    published: 1995 
};

//Add a third book
var book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: 1960 
};

//third book to the console
console.log(book3.title + " by " + book3.author + ", published in " + book3.published);

//include the new property for all books
console.log(book1.title + " by " + book1.author + ", published in " + book1.published);
console.log(book2.title + " by " + book2.author + ", published in " + book2.published);
console.log(book3.title + " by " + book3.author + ", published in " + book3.published);