const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
if (process.env.NODE_ENV === 'producao') {
    mongoose.connect('mongodb://localhost/seu_banco_de_dados', { useNewUrlParser: true, useUnifiedTopology: true });
  }

app.get('/', (req, res) => {
  res.send('Servidor do backend está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));