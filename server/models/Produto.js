// models/Produto.js

const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  tipo: String,
  modelo: String,
  material: String,
  tamanho: String,
  peso: Number,
  ativo: Boolean,
  cores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cor', required: false }],
  links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link', required: false  }],
  imagens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Imagem', required: false }]
});

module.exports = mongoose.model('Produto', produtoSchema);
