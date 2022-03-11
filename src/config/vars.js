require('dotenv').config();

module.exports = {
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 5000,
};
