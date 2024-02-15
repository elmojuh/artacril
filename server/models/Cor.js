// models/Cor.js
const mongoose = require('mongoose');

const corSchema = new mongoose.Schema({
  nomeCor: String,
  corCodigo: String,
  corDisponivel: Boolean
});

module.exports = mongoose.model('Cor', corSchema);
