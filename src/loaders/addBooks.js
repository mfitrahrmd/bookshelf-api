const { createBook } = require('../services/books.service');

createBook({
  name: 'Theory of Everything',
  year: 2008,
  author: 'Stephen Hawking',
  summary: 'An excellent astrophysics student working on his research',
  publisher: 'Jaico Publishing House',
  pageCount: 132,
  readPage: 10,
  reading: false,
});

createBook({
  name: 'Theory Relativity',
  year: 1905,
  author: 'Albert Einstein',
  summary: 'Physical phenomena in the absence of gravity',
  publisher: 'Albert Einstein',
  pageCount: 100,
  readPage: 100,
  reading: true,
});
