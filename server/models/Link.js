const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  dominio: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
  linkDisponivel: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Link', linkSchema);
