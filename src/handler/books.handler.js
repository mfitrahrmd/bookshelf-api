const {
  getAllBooks,
  getBookById,
  createBook,
} = require('../services/books.service');
const { SuccessResponse, FailResponse } = require('../utils/responseHelper');

async function getAllBooksHandler(req, h) {
  const result = await getAllBooks();

  if (result) {
    return h
      .response(
        new SuccessResponse({
          data: result,
        }),
      )
      .code(200);
  }
  return h.response('Fail');
}

async function getBookByIdHandler(req, h) {
  const { bookId } = req.params;

  try {
    const result = await getBookById(bookId);
    return h.response(new SuccessResponse({ data: result })).code(200);
  } catch (error) {
    return h
      .response(new FailResponse({ message: 'Buku tidak ditemukan' }))
      .code(404);
  }
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
