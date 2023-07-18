// Models
const Linha = require('../models/Linha');

// CREATE LINHA
const createLinha = async (req, res) => {
    const newLinha = req.body;

    try {
        
        const createdLinha = await Linha.create(newLinha);

        res.status(200).json(createdLinha)

    } catch (error) {
        res.status(500).json({error: error})
    }

}

// GET ALL LINHA
const getAllLinha = async (req, res) => {

    try {
        
        const allLinha = await Linha.find();

        res.status(200).json(allLinha)

    } catch (error) {
        res.status(500).json({error: error})
    }

}

// UPDATE LINHA
const updateLinha = async (req, res) => {
    const linha_id = req.params.id;
    const data = req.body;

    try {
        
        const updatedLinha = await Linha.findByIdAndUpdate(linha_id, data, { new: true });

        res.status(200).json(updatedLinha);

    } catch (error) {
        console.log("ERRO AO ATUALIZAR LINHA");
        res.status(500).json({error: error});
    }

}

// DELETE LINHA
const deleteLinha = async (req, res) => {
    const linha_id = req.params.id;

    try {
        
        const deletedLinha = await Linha.findByIdAndDelete(linha_id);

        res.status(200).json(deletedLinha);

    } catch (error) {
        console.log("ERRO AO DELETAR LINHA");
        res.status(500).json({error: error});
    }

}

module.exports = {
    createLinha,
    getAllLinha,
    updateLinha,
    deleteLinha,
}
