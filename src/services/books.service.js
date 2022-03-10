// Third-Party Modules
const { nanoid } = require('nanoid');
// Local Modules
const books = require('../data/books');

function getAllBooks() {
  return new Promise((resolve, reject) => {
    const isSuccess = books;

    if (isSuccess) {
      resolve({ books });
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

function editBookById() {}

function deleteBookById() {}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  editBookById,
  deleteBookById,
};
