type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  available: boolean;
};

const books: Book[] = [
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

const addBook = (book: Book) => {
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

const displayBooks = () => {
  books.forEach((book) => {
    console.log(book);
  });
};

displayBooks();

const filterByTitle = (search: string) =>
  books.filter(
    (book) => book.author.includes(search) || book.title.includes(search)
  );

const results = filterByTitle("Catcher");

console.log(results);

const filterByGender = (genre: string) => {
  books.filter(function (book) {
    if (book.genre === genre) {
      return true;
    }
    return false;
  });
};

function monFiltre(book, genre) {
  if (book.genre === genre) {
    return true;
  }
  return false;
}

const filterByGender1 = (genre: string) => {
  books.filter((book) => monFiltre(book, genre));
};

const filterByGender2 = (genre: string) => {
  books.filter((book) => {
    if (book.genre === genre) {
      return true;
    }
    return false;
  });
};

const filterByGender3 = (genre: string) => {
  books.filter((book) => book.genre === genre);
};

const customFilter = (search: string | number | boolean) =>
  books.filter((book) => {
    if (typeof search === "string" && book.author.includes(search)) return true;
    if (typeof search === "number" && book.year === search) return true;
  });
