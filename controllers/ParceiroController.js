// Models
const Parceiro = require("../models/Parceiro");

// CREATE PARCEIROS
const createParceiro = async (req, res) => {
  const data = req.body;

  try {
    const createdParceiro = await Parceiro.create(data);

    res.status(200).json(createdParceiro);
  } catch (error) {
    console.log("ERRO AO CADASTRAR NOVO PERCEIRO");
    res.status(300).json({ error: error });
  }
};

// GET ALL REPRESENTANTES
const getAllRepresentante = async (req, res) => {
  const query = req.query;
  // check if it is a empty object
  const queryLength = Object.keys(query).length === 0;

  try {
    // check if exists a query
    if (queryLength) {
      const allRepresentantes = await Parceiro.find({ tipo: "representante" });
      res.status(200).json(allRepresentantes);
    }

    if (query.city || query.uf) {
      const city = query.city ? query.city : "";
      const uf = query.uf ? query.uf : "";
      //query nao está funcionando
      const queryRepresentantes = await Parceiro.find({ cidades: city });

      console.log(city);
      console.log(uf);

      return res.status(200).json(queryRepresentantes);
    }
  } catch (error) {
    console.log("ERRO AO RESGATAR TODOS REPRESENTANTES");
    console.log(error);
    res.status(300).json({ error: error });
  }
};

// GET ALL ACT - ASSISTENTE CREDENCIADO TEXIUS
const getAllAct = async (req, res) => {
  try {
    const allAct = await Parceiro.find({ tipo: "act" });

    res.status(200).json(allAct);
  } catch (error) {
    console.log("ERRO AO RESGATAR TODOS OS ACTs");
    res.status(400).json({ error: error });
  }
};

// GET SINGLE PARCEIRO
const getSingleParceiro = async (req, res) => {
  const parceiroId = req.params.id;

  try {
    const singleParceiro = await Parceiro.find({ _id: parceiroId });

    res.status(200).json(singleParceiro);
  } catch (error) {
    console.log("ERRO AO RESGATAR SINGLE PARCEIRO");
    res.status(400).json({ error: error });
  }
};

// UPDATE PARCEIRO
const updateParceiro = async (req, res) => {
  const parceiro_id = req.params.id;
  const data = req.body;

  try {
    const updatedParceiro = await Parceiro.findByIdAndUpdate(
      parceiro_id,
      data,
      { new: true }
    );

    res.status(200).json(updatedParceiro);
  } catch (error) {
    console.log("ERRO AO ATUALIZAR PARCEIRO");
    res.status(400).json({ error: error });
  }
};

// UPDATE PARCEIRO
const patchParceiro = async (req, res) => {
  const parceiro_id = req.params.id;
  const data = req.body;

  try {
    const patchedParceiro = await Parceiro.findByIdAndUpdate(
      parceiro_id,
      data,
      { new: true }
    );

    res.status(200).json(patchedParceiro);
  } catch (error) {
    console.log("ERRO AO ATUALIZAR PARCEIRO");
    res.status(400).json({ error: error });
  }
};

// DELETE PARCEIRO
const deleteParceiro = async (req, res) => {
  const parceiro_id = req.params.id;

  try {
    const deletedParceiro = await Parceiro.findByIdAndDelete(parceiro_id);

    res.status(200).json(deletedParceiro);
  } catch (error) {
    console.log("ERRO AO DELETAR PARCEIRO");
    res.status(400).json({ error: error });
  }
};

module.exports = {
  createParceiro,
  getAllRepresentante,
  getAllAct,
  getSingleParceiro,
  updateParceiro,
  patchParceiro,
  deleteParceiro,
};
