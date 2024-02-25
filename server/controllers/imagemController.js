const imagemService = require('../services/imagemService');

class ImagemController {
  // Método para listar todas as imagens
  async listarImagens(_, res) {
    try {
        const imagem = await imagemService.listarImagens();
        res.json(imagem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }

  // Método para obter uma imagem pelo ID
  async buscarImagemPorId(req, res) {
    try {
        const imagem = await imagemService.buscarImagemPorId(req.params.id);
        if (!imagem) {
          return res.status(404).json({ error: 'Imagem não encontrado' });
        }
        res.json(imagem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }

  // Método para criar uma nova imagem
  async criarImagem(req, res) {
    try {
        const imagem = await imagemService.criarImagem(req.body);
        res.status(201).json(imagem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }

  // Método para atualizar uma imagem existente
  async atualizarImagem(req, res) {
    try {
        const imagem = await imagemService.atualizarImagem(req.params.id, req.body);
        if (!imagem) {
          return res.status(404).json({ error: 'Imagem não encontrado' });
        }
        res.json(imagem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }

  // Método para excluir uma imagem pelo ID
  async excluirImagem(req, res) {
    try {
        const imagem = await imagemService.excluirImagem(req.params.id);
        if (!imagem) {
          return res.status(404).json({ error: 'Imagem não encontrado' });
        }
        res.json({ message: 'Imagem deletado com sucesso' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }

  async associarImagemAoProduto(req, res) {
    try {
        const { idImagem, idProduto } = req.params;
        const produto = await imagemService.associarImagemAoProduto(idImagem, idProduto);
        res.json(produto);
      } catch (error) {
        if (error.message === 'Imagem não encontrada' || error.message === 'Produto não encontrado') {
          return res.status(404).json({ error: error.message });
        }
        else if (error.message === 'Erro ao associar imagem ao produto') {
          return res.status(400).json({ error: error.message });
        }
        else {
          res.status(500).json({ error: error.message });
        }
      }
  }

  async desassociarImagemDoProduto(req, res) {
    try {
        const { idImagem, idProduto } = req.params;
        const produto = await imagemService.desassociarImagemDoProduto(idImagem, idProduto);
        res.json(produto);
      } catch (error) {
        if (error.message === 'Imagem não encontrada' || error.message === 'Produto não encontrado') {
          return res.status(404).json({ error: error.message });
        }
        else {
          res.status(500).json({ error: error.message });
        }
      }
  }

}


module.exports = new ImagemController();
