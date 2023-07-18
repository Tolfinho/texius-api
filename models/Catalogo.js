const mongoose = require('mongoose')

const CatalogoSchema = new mongoose.Schema({
    titulo: String,
    file: String,
    image: String,
}, { timestamps: true })

const Catalogo = mongoose.model("Catalogo", CatalogoSchema)

module.exports = Catalogo