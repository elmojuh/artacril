// controllers/linkController.js
const linkService = require('../services/linkService');

class LinkController {
  async listarLinks(_, res) {
    try {
      const links = await linkService.listarLinks();
      res.json(links);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarLinkPorId(req, res) {
    try {
      const link = await linkService.buscarLinkPorId(req.params.id);
      if (!link) {
        return res.status(404).json({ error: 'Link não encontrado' });
      }
      res.json(link);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async criarLink(req, res) {
    try {
      const link = await linkService.criarLink(req.body);
      res.status(201).json(link);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizarLink(req, res) {
    try {
      const link = await linkService.atualizarLink(req.params.id, req.body);
      if (!link) {
        return res.status(404).json({ error: 'Link não encontrado' });
      }
      res.json(link);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async excluirLink(req, res) {
    try {
      const result = await linkService.excluirLink(req.params.id);
      if (!result) {
        return res.status(404).json({ error: 'Link não encontrado' });
      }
      res.json({ message: 'Link deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async associarLinkAoProduto(req, res) {
    try {
      const { idLink, idProduto } = req.params;
      const produto = await linkService.associarLinkAoProduto(idLink, idProduto);
      res.json(produto);
    } catch (error) {
      if (error.message === 'LLink não encontrado' || error.message === 'Produto não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async desassociarLinkDoProduto(req, res) {
    try {
      const { idLink, idProduto } = req.params;
      const produto = await linkService.desassociarLinkDoProduto(idLink, idProduto);
      res.json(produto);
    } catch (error) {
      if (error.message === 'Link não encontrado' || error.message === 'Produto não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new LinkController();
