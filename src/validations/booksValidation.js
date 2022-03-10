const Joi = require('joi');

const createBookValidation = Joi.object().keys({
  name: Joi.required().messages({
    'any.required': 'Gagal menambahkan buku. Mohon isi nama buku',
  }),
  pageCount: Joi.number().required().messages({
    'any.required': 'Gagal menambahkan buku. Mohon isi pageCount',
  }),
  readPage: Joi.number().max(Joi.ref('pageCount')).required().messages({
    'number.max':
      'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
  }),
});

module.exports = { createBookValidation };
