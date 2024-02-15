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
  cores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cor' }], // Use mongoose.Schema.Types.ObjectId para referenciar documentos no modelo Cor
  links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }] // Use mongoose.Schema.Types.ObjectId para referenciar documentos no modelo Limk
});

module.exports = mongoose.model('Produto', produtoSchema);
