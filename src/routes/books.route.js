const {
  getAllBooksHandler,
  getBookByIdHandler,
  createBookHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('../handler/books.handler');

const routes = [
  {
    path: '/',
    method: '*',
    handler: (req, h) => {
      return h.response({
        message: 'Welcome to Bookshelf API!',
      });
    },
  },
  {
    path: '/books',
    method: 'GET',
    handler: getAllBooksHandler,
  },
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookByIdHandler,
  },
  {
    path: '/books',
    method: 'POST',
    handler: createBookHandler,
  },
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: editBookByIdHandler,
  },
  {
    path: '/books/{bookId}',
    method: 'DELETE',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
