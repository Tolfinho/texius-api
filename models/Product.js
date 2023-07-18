const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    aplicacao: String,
    lancamento: Boolean,
    active: Boolean,
    linhas: Array,
    duchas: Number,
    vazao: Number,
    video: String,
    images: Array,
    folders: Array,
    manual: String,
    modelos: Array,
    vantagens: Array,
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product