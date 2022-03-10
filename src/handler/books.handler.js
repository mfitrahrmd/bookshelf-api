const {
  getAllBooks,
  getBookById,
  createBook,
  editBookById,
} = require('../services/books.service');
const { SuccessResponse, FailResponse } = require('../utils/responseHelper');

async function getAllBooksHandler(req, h) {
  try {
    const result = await getAllBooks();
    return h
      .response(
        new SuccessResponse({
          data: result,
        }),
      )
      .code(200);
  } catch (error) {
    return h.response('Fail').code(500);
  }
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

  try {
    const result = await createBook(payload);
    return h
      .response(
        new SuccessResponse({
          message: 'Buku berhasil ditambahkan',
          data: result,
        }),
      )
      .code(201);
  } catch (error) {
    return h.response('Fail').code(500);
  }
}

async function editBookByIdHandler(req, h) {
  const { bookId } = req.params;
  const { payload } = req;

  try {
    await editBookById(bookId, payload);
    return h
      .response(new SuccessResponse({ message: 'Buku berhasil diperbarui' }))
      .code(200);
  } catch (error) {
    return h
      .response(
        new FailResponse({ message: 'Gagal memperbarui. Id tidak ditemukan' }),
      )
      .code(404);
  }
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
