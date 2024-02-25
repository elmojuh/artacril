const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/artacril2';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Outras opções, se necessário
};

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, options);
    console.log('Conectado ao banco de dados MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados MongoDB:', err);
    process.exit(1); // Encerra o processo em caso de erro de conexão
  }
};

module.exports = connectDB;
