const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  nomeDominio: {
    type: String,
    required: false
  },
  nomeProduto: {
    type: String,
    required: false
  },
  linkProduto: {
    type: String,
    required: false
  },
  linkDisponivel: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Link', linkSchema);
