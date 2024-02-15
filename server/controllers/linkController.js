// controllers/linkController.js
const linkService = require('../services/linkService');

class LinkController {
  async getAllLinks(req, res) {
    try {
      const links = await linkService.getAllLinks();
      res.json(links);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getLinkById(req, res) {
    try {
      const link = await linkService.getLinkById(req.params.id);
      if (!link) {
        return res.status(404).json({ error: 'Link not found' });
      }
      res.json(link);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createLink(req, res) {
    try {
      const link = await linkService.createLink(req.body);
      res.status(201).json(link);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateLink(req, res) {
    try {
      const link = await linkService.updateLink(req.params.id, req.body);
      if (!link) {
        return res.status(404).json({ error: 'Link not found' });
      }
      res.json(link);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteLink(req, res) {
    try {
      const result = await linkService.deleteLink(req.params.id);
      if (!result) {
        return res.status(404).json({ error: 'Link not found' });
      }
      res.json({ message: 'Link deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new LinkController();
