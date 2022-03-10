const { createBook } = require('../services/books.service');
const { SuccessResponse } = require('../utils/responseHelper');

async function getAllBooksHandler(req, h) {
  return h.response('books');
}

function getBookByIdHandler(req, h) {
  return h.response('book');
}

async function createBookHandler(req, h) {
  const { payload } = req;

  const result = await createBook(payload);

  if (result) {
    return h
      .response(
        new SuccessResponse({
          message: 'Buku berhasil ditambahkan',
          data: result,
        }),
      )
      .code(201);
  }
  return h.response('Fail');
}

function editBookByIdHandler(req, h) {
  return h.response('book edited');
}

function deleteBookByIdHandler(req, h) {
  return h.response('book deleted');
}
module.exports = {
  getAllBooksHandler,
  getBookByIdHandler,
  createBookHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
