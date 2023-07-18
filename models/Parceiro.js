const mongoose = require("mongoose");

const ParceiroSchema = new mongoose.Schema({
    tipo: String,
    name: String,
    responsavel: String,
    cnpj: String,
    linhas: Array,
    regioes: Array,
    address: String,
    phone: String,
    cel: String,
    email: String,
    active: Boolean,
}, {timestamps: true})

module.exports = mongoose.model("Parceiro", ParceiroSchema);