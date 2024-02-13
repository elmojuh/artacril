const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const produtoRoutes = require('./routes/produtoRoutes'); // Importa as rotas de produtos

// Configurando o body-parser para analisar solicitações do tipo JSON
app.use(bodyParser.json());

// Configurando o body-parser para analisar solicitações do tipo URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));


// URL de conexão do MongoDB
const mongoURI = 'mongodb://localhost:27017/artacril2';

// Configuração da conexão com o MongoDB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Outras opções, se necessário
};

// Conectando ao MongoDB
mongoose.connect(mongoURI, options)
  .then(() => console.log('Conectado ao banco de dados MongoDB'))
  .catch(err => console.error('Erro ao conectar ao banco de dados MongoDB:', err));



// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor do backend está funcionando!');
});

// Rotas de produtos
app.use('/api', produtoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
