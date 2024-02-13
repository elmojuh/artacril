// controllers/produtoController.js
const Produto = require('../models/Produto');

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// controllers/produtoController.js

exports.criarProduto = async (req, res) => {
  const { nome, descricao, preco, tipo, modelo, material, tamanho, peso, ativo } = req.body;
  const novoProduto = new Produto({
    nome,
    descricao,
    preco,
    tipo,
    modelo,
    material,
    tamanho,
    peso,
    ativo
  });
  try {
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo); // Retorna o objeto completo do produto criado
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(400).json({ error: 'Erro ao criar produto' });
  }
};



exports.atualizarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.excluirProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
