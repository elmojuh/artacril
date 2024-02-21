// routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/', linkController.listarLinks);
router.get('/:id', linkController.buscarLinkPorId);
router.post('/', linkController.criarLink);
router.put('/:id', linkController.atualizarLink);
router.delete('/:id', linkController.excluirLink);
router.post('/addLink/:idLink/produto/:idProduto', linkController.associarLinkAoProduto);
router.post('/removerLink/:idLink/produto/:idProduto', linkController.desassociarLinkDoProduto);

module.exports = router;


