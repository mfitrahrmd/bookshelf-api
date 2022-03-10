// Third-Party Modules
const { nanoid } = require('nanoid');
// Local Modules
const books = require('../data/books');

function getAllBooks() {
  return new Promise((resolve, reject) => {
    const allBooks = books.map((val) => ({
      id: val.id,
      name: val.name,
      publisher: val.publisher,
    }));

    if (allBooks) {
      resolve({ books: allBooks });
    } else {
      reject();
    }
  });
}

function getBookById(bookId) {
  return new Promise((resolve, reject) => {
    const book = books.find((val) => val.id === bookId);

    if (book) {
      resolve({ book });
    } else {
      reject();
    }
  });
}

function createBook({
  name,
  year,
  author,
  summary,
  publisher,
  pageCount,
  readPage,
  reading,
}) {
  return new Promise((resolve, reject) => {
    const ID = nanoid(16);
    const DATE = new Date().toISOString();
    const FINISHED = pageCount === readPage;

    const newBook = {
      id: ID,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished: FINISHED,
      insertedAt: DATE,
      updatedAt: DATE,
    };

    const isSuccess = books.push(newBook);

    if (isSuccess) {
      resolve({ bookId: ID });
    } else {
      reject();
    }
  });
}

function editBookById(
  bookId,
  // eslint-disable-next-line object-curly-newline
  { name, year, author, summary, publisher, pageCount, readPage, reading },
) {
  return new Promise((resolve, reject) => {
    const DATE = new Date().toISOString();
    const FINISHED = pageCount === readPage;
    const bookIndex = books.findIndex((val) => val.id === bookId);

    if (bookIndex < 0) {
      reject();
    }

    let bookData = {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished: FINISHED,
      updatedAt: DATE,
    };

    bookData = Object.fromEntries(
      Object.entries(bookData).filter((val) => val[1]),
    ); // remove object properties with no value

    books[bookIndex] = { ...books[bookIndex], ...bookData };

    resolve();
  });
}

function deleteBookById(bookId) {
  return new Promise((resolve, reject) => {
    const bookIndex = books.findIndex((val) => val.id === bookId);

    if (bookIndex < 0) {
      reject();
    }

    const isSuccess = books.splice(bookIndex, 1);

    if (isSuccess) {
      resolve();
    }
  });
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  editBookById,
  deleteBookById,
};
