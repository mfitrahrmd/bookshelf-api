// Local Modules
const {
  getAllBooksHandler,
  getBookByIdHandler,
  createBookHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('../handler/books.handler');
const {
  createBookValidation,
  editBookValidation,
} = require('../validations/booksValidation');
const failActionHandler = require('../handler/failActionHandler');

const routes = [
  // Welcome route
  {
    path: '/',
    method: '*',
    handler: (req, h) => {
      return h.response({
        message: 'Welcome to Bookshelf API!',
      });
    },
  },
  // Get all books
  {
    path: '/books',
    method: 'GET',
    handler: getAllBooksHandler,
  },
  // Get book
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookByIdHandler,
  },
  // Create book
  {
    path: '/books',
    method: 'POST',
    handler: createBookHandler,
    options: {
      validate: {
        options: {
          allowUnknown: true,
        },
        payload: createBookValidation,
        failAction: failActionHandler,
      },
    },
  },
  // Edit book
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: editBookByIdHandler,
    options: {
      validate: {
        options: {
          allowUnknown: true,
        },
        payload: editBookValidation,
        failAction: failActionHandler,
      },
    },
  },
  // Delete book
  {
    path: '/books/{bookId}',
    method: 'DELETE',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
