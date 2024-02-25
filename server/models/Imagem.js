const mongoose = require('mongoose');

const imagemSchema = new mongoose.Schema({
  nomeImagem: {
    type: String,
    required: true
  },
  caminhoImagem: {
    type: String,
    required: true
  },
  descricaoImagem: {
    type: String,
    required: false
  },
  imagemDisponivel: {
    type: Boolean,
    default: false
  }
});

const Imagem = mongoose.model('Imagem', imagemSchema);

module.exports = Imagem;
