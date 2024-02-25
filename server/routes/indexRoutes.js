// routes/indexRoutes.js
const express = require('express');
const router = express.Router();

const produtoRoutes = require('./produtoRoutes');
const corRoutes = require('./corRoutes');
const linkRoutes = require('./linkRoutes');
const imagemRoutes = require('./imagemRoutes');

// Rota raiz
router.get('/', (req, res) => {
  res.send('Bem-vindo à sua aplicação!');
});

// Rotas para os recursos Produto e Cor
router.use('/produtos', produtoRoutes);
router.use('/cores', corRoutes);
router.use('/links', linkRoutes);
router.use('/imagens', imagemRoutes);


module.exports = router;
