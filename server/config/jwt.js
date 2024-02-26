// config/jwt.js
const jwt = require('jsonwebtoken');

const gerarToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = gerarToken;
