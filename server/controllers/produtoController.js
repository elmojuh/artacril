// controllers/produtoController.js
const produtoService = require('../services/produtoService');

class ProdutoController {
  async criarProduto(req, res) {
    const produtoData = req.body;
    try {
      const produtoSalvo = await produtoService.criarProduto(produtoData);
      res.status(201).json(produtoSalvo);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      res.status(400).json({ error: 'Erro ao criar produto' });
    }
  }

  async listarProdutos(req, res) {
    try {
      const produtos = await produtoService.listarProdutos();
      res.json(produtos);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const produto = await produtoService.buscarProdutoPorId(id);
      res.json(produto);
    } catch (error) {
      console.error('Erro ao buscar produto por ID:', error);
      if (error.message === 'Produto não encontrado') {
        res.status(404).json({ error: 'Produto não encontrado' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }

  async atualizarProduto(req, res) {
    const { id } = req.params;
    const novoProdutoData = req.body;
    try {
      const produtoAtualizado = await produtoService.atualizarProduto(id, novoProdutoData);
      res.json(produtoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      if (error.message === 'Produto não encontrado') {
        res.status(404).json({ error: 'Produto não encontrado' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }

  async excluirProdutoByID(req, res) {
    const { id } = req.params;
    try {
      const mensagem = await produtoService.excluirProdutoById(id);
      res.json(mensagem);
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      if (error.message === 'Produto não encontrado') {
        res.status(404).json({ error: 'Produto não encontrado' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }
}

module.exports = new ProdutoController();
