// Models
const Orcamento = require('../models/Orcamento');

// Imports
const nodeMailer = require('nodemailer');
const { Mail } = require('../utils/Mail')

// CREATE ORÇAMENTO
const createOrcamento = async (req, res) => {
    const data = req.body;

    try {
        
        const createdOrcamento = await Orcamento.create(data);

        res.status(200).json(createdOrcamento);

    } catch (error) {
        console.log("ERRO AO CRIAR UM NOVO ORÇAMENTO");
        res.status(500).json({error: error});
    }

}

// GET ALL ORÇAMENTO
const getAllOrcamento = async (req, res) => {

    try {
        
        const allOrcamento = await Orcamento.find();

        res.status(200).json(allOrcamento);

    } catch (error) {
        console.log("ERRO AO RESGATAR TODOS ORÇAMENTOS");
        res.status(500).json({error: error});
    }

}

// GET SINGLE ORÇAMENTO
const getSingleOrcamento = async (req, res) => {
    const orcamento_id = req.params.id;

    try {
        
        const singleOrcamento = await Orcamento.findById(orcamento_id);

        res.status(200).json(singleOrcamento);

    } catch (error) {
        console.log("ERRO AO RESGATAR TODOS ORÇAMENTOS");
        res.status(500).json({error: error});
    }

}

// SEND EMAIL
const sendOrcamentoEmail = async (req, res) => {
    const from = 'Texius <site@texius.com.br>'
    const to = 'joao@texius.com.br'
    const subject = 'Meu assunto vai aqui...'
    const data = req.body
    console.log(req.body)

    try {
        //sendEmail(from, to, subject, data)
        Mail(from, to, subject, data)
        res.status(200).json({msg:"funcionou"})
    } catch (error) {
        res.status(400).json({msg:"algo deu errado"})
    }
}

module.exports = {
    createOrcamento,
    getSingleOrcamento,
    getAllOrcamento,
    sendOrcamentoEmail,
}