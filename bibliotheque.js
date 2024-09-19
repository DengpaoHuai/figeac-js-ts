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

var filterByTitle = function (search) {
  return books.filter(function (book) {
    return book.author.includes(search) || book.title.includes(search);
  });
};
var results = filterByTitle("Catcher");
console.log(results);
var filterByGender = function (genre) {
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
var filterByGender1 = function (genre) {
  books.filter(function (book) {
    return monFiltre(book, genre);
  });
};
var filterByGender2 = function (genre) {
  books.filter(function (book) {
    if (book.genre === genre) {
      return true;
    }
    return false;
  });
};
var filterByGender3 = function (genre) {
  books.filter(function (book) {
    return book.genre === genre;
  });
};
var customFilter = function (search) {
  return books.filter(function (book) {
    if (typeof search === "string" && book.author.includes(search)) return true;
    if (typeof search === "number" && book.year === search) return true;
  });
};

var filterByTitle = function (search) {
  return books.filter(function (book) {
    return book.title.toLowerCase().includes(search.toLowerCase());
  });
};

var displayBooks = function (books) {
  document.getElementById("books_container").innerHTML = "";
  books.forEach(function (book) {
    console.log(book);
    const p = document.createElement("p");
    p.innerText = book.title;
    document.getElementById("books_container").appendChild(p);
  });
};
displayBooks(books);

const form = document.getElementById("search_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = form.search.value;
  const filteredValues = filterByTitle(search);
  displayBooks(filteredValues);
});

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const getData = async () => {
  await delay(2000);
  try {
    const result = await fetch("https://swapi.dev/api/planets");
    const data = await result.json();
    console.log(data);
    console.log("coucou");
  } catch (error) {}
};
getData();

/*
fetch("https://swapi.dev/api/planets")
  .then((result) => {
    result.json().then((data) => console.log(data));
  })
  .catch((err) => console.log(err));
*/
/*
fetch("https://swapi.dev/api/planets")
  .then((result) => {
    return result.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/

fetch("https://swapi.dev/api/planets")
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
