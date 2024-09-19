var books = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997,
        genre: "Fantasy",
        available: true,
    },
    {
        id: 2,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        genre: "Fantasy",
        available: true,
    },
    {
        id: 3,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        year: 2003,
        genre: "Mystery",
        available: false,
    },
    {
        id: 4,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
        available: true,
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Fiction",
        available: true,
    },
    {
        id: 6,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Fiction",
        available: true,
    },
];
var addBook = function (book) {
    books.push(book);
};
addBook({
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    available: true,
});
var displayBooks = function () {
    books.forEach(function (book) {
        console.log(book);
    });
};
displayBooks();
var filterByTitle = function (search) {
    return books.filter(function (book) { return book.title.includes(search); });
};
var results = filterByTitle("Catcher");
console.log(results);
