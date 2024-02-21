// routes/imagemRoutes.js
const express = require('express');
const router = express.Router();
const imagemController = require('../controllers/imagemController');

router.get('/', imagemController.listarImagens);
router.get('/:id', imagemController.buscarImagemPorId);
router.post('/', imagemController.criarImagem);
router.put('/:id', imagemController.atualizarImagem);
router.delete('/:id', imagemController.excluirImagem);
router.post('/addImagem/:idImagem/produto/:idProduto', imagemController.associarImagemAoProduto);
router.post('/removerImagem/:idImagem/produto/:idProduto', imagemController.desassociarImagemDoProduto);

module.exports = router;


