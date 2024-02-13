// models/Produto.ts
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
  ativo: Boolean
});

module.exports = mongoose.model('Produto', produtoSchema);
