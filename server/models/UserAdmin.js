const mongoose = require('mongoose');

const userAdminSchema = new mongoose.Schema({
  email: String,
  senha: String,
  contraSenha: String,
});

module.exports = mongoose.model('UserAdmin', userAdminSchema);
