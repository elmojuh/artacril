const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/indexRoutes');
const connectDB = require('./config/database');

// Configurando o body-parser para analisar solicitações do tipo JSON
app.use(bodyParser.json());

// Configurando o body-parser para analisar solicitações do tipo URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Conectando ao banco de dados
connectDB();

// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor do backend está funcionando!');
});

// Rotas de produtos
app.use('/api', indexRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
