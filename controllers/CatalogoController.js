// Models
const Catalogo = require('../models/Catalogo')

// CREATE CATALOGO
const createCatalogo = async (req, res) => {

    const newCatalogo = req.body

    try {
        const createdCatalogo = await Catalogo.create(newCatalogo)

        res.status(200).json({ msg: "Catálogo cadastrado com sucesso!" })

    } catch (error) {
        console.log("Algo deu errado ao criar novo catálogo!")
        res.status(400).json({ error: "Falha ao criar novo catálogo!" })
    }

}

// DELETE CATALOGO
const deleteCatalogo = async (req, res) => {

    const catalogoId = req.params.id

    try {

        const deletedCatalogo = await Catalogo.findByIdAndDelete(catalogoId)

        res.status(200).json({ msg: "Catálogo deletado com sucesso!" })

    } catch (error) {
        console.log("Algo deu errado ao criar novo catálogo!")
        res.status(400).json({ error: "Falha ao criar novo catálogo!" })
    }

}

// GET ALL CATALOGOS
const getAllCatalogos = async (req, res) => {

    try {

        const allCatalogos = await Catalogo.find()

        res.status(200).json(allCatalogos)

    } catch (error) {
        console.log("Algo deu errado ao resgatar todos os catálogos!")
        res.status(400).json({ error: "Falha ao criar novo catálogo!" })
    }

}

module.exports = {
    getAllCatalogos,
    createCatalogo,
    deleteCatalogo,
}