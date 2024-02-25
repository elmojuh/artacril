// controllers/corController.js
const corService = require('../services/corService');

class CorController {
  async listarCors(_, res) {
    try {
      const cores = await corService.listarCores();
      res.json(cores);
    } catch (error) {
      if (error.message === 'Cores não encontradas') {
        res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async getCorById(req, res) {
    try {
      const cor = await corService.buscarCorPorId(req.params.id);
      res.json(cor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async criarCor(req, res) {
    try {
      const cor = await corService.criarCor(req.body);
      res.status(201).json(cor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async atualizarCor(req, res) {
    try {
      const cor = await corService.atualizarCor(req.params.id, req.body);
      res.json(cor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async excluirCorById(req, res) {
    try {
      const result = await corService.excluirCorPorId(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async associarCorAoProduto(req, res) {
    try {
      const { idCor, idProduto } = req.params;
      const produto = await corService.associarCorAoProduto(idCor, idProduto);
      res.json(produto);
    } catch (error) {
      if (error.message === 'Cor não encontrada' || error.message === 'Produto não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      else if (error.message === 'Erro ao associar cor ao produto') {
        return res.status(400).json({ error: error.message });
      }
      else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  async desassociarCorDoProduto(req, res) {
    try {
      const { idCor, idProduto } = req.params;
      const produto = await corService.desassociarCorDoProduto(idCor, idProduto);
      res.json(produto);
    } catch (error) {
      if (error.message === 'Cor não encontrada' || error.message === 'Produto não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      else if (error.message === 'Erro ao desassociar cor do produto') {
        return res.status(400).json({ error: error.message });
      }
      else {
        res.status(500).json({ error: error.message });
      }
    }
  }
}

module.exports = new CorController();
