// controllers/corController.js
const corService = require('../services/corService');

class CorController {
  async listarCors(req, res) {
    try {
      const cores = await corService.getAllCores();
      res.json(cores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCorById(req, res) {
    try {
      const cor = await corService.getCorById(req.params.id);
      res.json(cor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async criarCor(req, res) {
    try {
      const cor = await corService.createCor(req.body);
      res.status(201).json(cor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async atualizarCor(req, res) {
    try {
      const cor = await corService.updateCor(req.params.id, req.body);
      res.json(cor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async excluirCorById(req, res) {
    try {
      const result = await corService.deleteCor(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new CorController();
