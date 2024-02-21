// services/imagemService.js

const Imagem = require('../models/Imagem');
const Produto = require('../models/Produto');

class ImagemService {
  async listarImagens() {
    try {
      return await Imagem.find();
    } catch (error) {
      throw new Error('Imagems não encontrados');
    }
  }

  async buscarImagemPorId(id) {
    try {
      return await Imagem.findById(id);
    } catch (error) {
      throw new Error('Imagem não encontrado');
    }
  }

  async criarImagem(data) {
    try {
      return await Imagem.create(data);
    } catch (error) {
      throw new Error('Erro ao criar imagem');
    }
  }

  async atualizarImagem(id, data) {
    try {
      return await Imagem.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error('Erro ao atualizar imagem');
    }
  }

  async excluirImagem(id) {
    try {
      return await Imagem.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Erro ao excluir imagem');
    }
  }

  async associarImagemAoProduto(imagemId, produtoId) {
    try {
      const imagem = await Imagem.findById(imagemId);
      if (!imagem) {
        throw new Error('Imagem não encontrado');
      }
      const produto = await Produto.findById(produtoId);
      if (!produto) {
        throw new Error('Produto não encontrado');
      }
      produto.imagens.push(imagemId);
      await produto.save();
      if (!produto) {
        throw new Error('Erro ao associar imagem ao produto');
      }
      return produto;
    } catch (error) {
      throw new Error('Erro ao associar imagem ao produto: ' + error.message);
    }
  }

  async desassociarImagemDoProduto(imagemId, produtoId) {
    try {
      const imagem = await Imagem.findById(imagemId);
      if (!imagem) {
        throw new Error('Imagem não encontrado');
      }
      const produto = await Produto.findById(produtoId);
      if (!produto) {
        throw new Error('Produto não encontrado');
      }
      produto.imagens = produto.imagens.filter((imagem) => imagem.toString() !== imagemId);
      await produto.save();
      if (!produto) {
        throw new Error('Erro ao desassociar imagem do produto');
      }
      return produto;
    } catch (error) {
      throw new Error('Erro ao desassociar imagem do produto: ' + error.message);
    }
  }
}

module.exports = new ImagemService();
