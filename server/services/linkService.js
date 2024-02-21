// services/linkService.js
const Link = require('../models/Link');
const Produto = require('../models/Produto');

class LinkService {
  async listarLinks() {
    try {
      return await Link.find();
    } catch (error) {
      throw new Error('Links não encontrados');
    }
  }

  async buscarLinkPorId(id) {
    try {
      return await Link.findById(id);
    } catch (error) {
      throw new Error('Link não encontrado');
    }
  }

  async criarLink(data) {
    try {
      return await Link.create(data);
    } catch (error) {
      throw new Error('Erro ao criar link');
    }
  }

  async atualizarLink(id, data) {
    try {
      return await Link.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error('Erro ao atualizar link');
    }
  }

  async excluirLink(id) {
    try {
      return await Link.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Erro ao excluir link');
    }
  }

  async associarLinkAoProduto(linkId, produtoId) {
    try {
      const link = await Link.findById(linkId);
      if (!link) {
        throw new Error('Link não encontrado');
      }
      const produto = await Produto.findById(produtoId);
      if (!produto) {
        throw new Error('Produto não encontrado');
      }
      produto.links.push(linkId);
      await produto.save();
      if (!produto) {
        throw new Error('Erro ao associar link ao produto');
      }
      return produto;
    } catch (error) {
      throw new Error('Erro ao associar link ao produto: ' + error.message);
    }
  }

  async desassociarLinkDoProduto(linkId, produtoId) {
    try {
      const link = await Link.findById(linkId);
      if (!link) {
        throw new Error('Link não encontrado');
      }
      const produto = await Produto.findById(produtoId);
      if (!produto) {
        throw new Error('Produto não encontrado');
      }
      produto.links = produto.links.filter((link) => link.toString() !== linkId);
      await produto.save();
      if (!produto) {
        throw new Error('Erro ao desassociar link do produto');
      }
      return produto;
    } catch (error) {
      throw new Error('Erro ao desassociar link do produto: ' + error.message);
    }
  }
}

module.exports = new LinkService();
