// routes/corRoutes.js
const express = require('express');
const router = express.Router();
const corController = require('../controllers/corController');

// Rota para criar uma nova cor
router.post('/', corController.criarCor);
router.get('/', corController.listarCors);
router.get('/:id', corController.getCorById);
router.put('/:id', corController.atualizarCor);
router.delete('/:id', corController.excluirCorById);
router.post('/addCor/:idCor/produto/:idProduto', corController.associarCorAoProduto);
router.post('/removerCor/:idCor/produto/:idProduto', corController.desassociarCorDoProduto);

module.exports = router;
