// routes/indexRoutes.js
const express = require('express');
const router = express.Router();

const produtoRoutes = require('./produtoRoutes');
const corRoutes = require('./corRoutes');
const linkRoutes = require('./linkRoutes');
const imagemRoutes = require('./imagemRoutes');
const userAdminRoutes = require('./userAdminRoutes');

// Rota raiz
router.get('/', (_, res) => {
  res.send('Bem-vindo à sua aplicação!');
});

// Rotas para os recursos Produto e Cor
router.use('/produtos', produtoRoutes);
router.use('/cores', corRoutes);
router.use('/links', linkRoutes);
router.use('/imagens', imagemRoutes);
router.use('/user-admin', userAdminRoutes);


module.exports = router;
