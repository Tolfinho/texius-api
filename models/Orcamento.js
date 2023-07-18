const mongoose = require("mongoose");

/* Products é um array de objetos com o ID do produto,
Quantidade e Observação */

/* Contact é um array de objetos com dados pessoais 
para contato com o cliente */
const OrcamentoSchema = new mongoose.Schema({
    products: Array,
    contact: Array,
}, {
    timestamps: true,
})

module.exports = mongoose.model("Orcamento", OrcamentoSchema);