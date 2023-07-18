const mongoose = require('mongoose');

const LinhaSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Linha', LinhaSchema);
