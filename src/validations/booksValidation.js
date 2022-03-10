const Joi = require('joi');

const createBookValidation = Joi.object().keys({
  name: Joi.string().required().messages({
    'any.required': 'Gagal menambahkan buku. Mohon isi nama buku',
  }),
  year: Joi.number(),
  author: Joi.string(),
  summary: Joi.string(),
  publisher: Joi.string(),
  pageCount: Joi.number().required().messages({
    'any.required': 'Gagal menambahkan buku. Mohon isi pageCount',
  }),
  readPage: Joi.number().max(Joi.ref('pageCount')).required().messages({
    'number.max':
      'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
  }),
  reading: Joi.boolean(),
});

const editBookValidation = Joi.object().keys({
  name: Joi.string().required().messages({
    'any.required': 'Gagal memperbarui buku. Mohon isi nama buku',
  }),
  year: Joi.number(),
  author: Joi.string(),
  summary: Joi.string(),
  publisher: Joi.string(),
  pageCount: Joi.number().required().messages({
    'any.required': 'Gagal memperbarui buku. Mohon isi pageCount',
  }),
  readPage: Joi.number().max(Joi.ref('pageCount')).required().messages({
    'any.required': 'Gagal memperbarui buku. Mohon isi readPage',
    'number.max':
      'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
  }),
  reading: Joi.boolean(),
});

module.exports = { createBookValidation, editBookValidation };
