// services/produtoService.js
const Produto = require('../models/Produto');

class ProdutoService {
  async criarProduto(produtoData) {
    try {
      const novoProduto = new Produto(produtoData);
      const produtoSalvo = await novoProduto.save();
      return produtoSalvo;
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw new Error('Erro ao criar produto');
    }
  }

  async listarProdutos() {
    try {
      const produtos = await Produto.find();
      return produtos;
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      throw new Error('Erro ao listar produtos');
    }
  }

  async buscarProdutoPorId(id) {
    try {
      const produto = await Produto.findById(id).populate('cores').populate('links');
      if (!produto) {
        throw new Error('Produto não encontrado');
      }
      return produto;
    } catch (error) {
      console.error('Erro ao buscar produto por ID:', error);
      throw new Error('Erro ao buscar produto por ID');
    }
  }

  async atualizarProduto(id, novoProdutoData) {
    try {
      const produtoAtualizado = await Produto.findByIdAndUpdate(id, novoProdutoData, { new: true });
      if (!produtoAtualizado) {
        throw new Error('Produto não encontrado');
      }
      return produtoAtualizado;
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      throw new Error('Erro ao atualizar produto');
    }
  }

  async excluirProdutoById(id) {
    try {
      const produtoExcluido = await Produto.findByIdAndDelete(id);
      if (!produtoExcluido) {
        throw new Error('Produto não encontrado');
      }
      return { message: 'Produto excluído com sucesso' };
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      throw new Error('Erro ao excluir produto');
    }
  }
}

module.exports = new ProdutoService();
