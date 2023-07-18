// Models
const Product = require("../models/Product");

// CREATE PRODUCT
const createProduct = async (req, res) => {
    const data = req.body;
  
    try {
      
      await Product.create(data);
      console.log(data)
  
      res.status(200).json({success: "Produto cadastrado com sucesso!"});
  
    } catch (error) {
      console.log("ERRO AO CADASTRAR NOVO PRODUTO!", error);
      res.status(500).json({error: error});
    }
}

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    
    try {
        
        const allProducts = await Product.find();

        res.status(200).json(allProducts);

    } catch (error) {
        console.log('ERRO AO PEGAR TODOS OS PRODUTOS');
        res.status(500).json({error: error})
    }

}

// GET ALL ACTIVE PRODUCTS
const getAllActiveProducts = async (req, res) => {
    const query = req.query

    try {
        // Check if is a query about vazao ou duchas
        if(query.vazao || query.duchas){
            const queryProducts = await Product.find({
                vazao: query.vazao
            })

            if(queryProducts)
                return res.status(200).json(queryProducts)
            else
                return res.status(200).json({msg: "Não existe nenhum produto desse tipo!"})
        }

        // Check if is a query about linhas
        if(query.linha){
            return res.status(200).json({msg: "Todos os produtos desta linha"})
        }

        const allActiveProducts = await Product.find({active: true});

        res.status(200).json(allActiveProducts);

    } catch (error) {
        console.log('ERRO AO PEGAR TODOS OS PRODUTOS ATIVOS');
        res.status(500).json({error: error})
    }

}

// GET SINGLE PRODUCT
const getSingleProduct = async (req, res) => {
    const id = req.params.id;

    try {
        
        const singleProduct = await Product.findById(id);

        console.log('PRODUTO RESGATADO COM SUCESSO!');
        res.status(200).json(singleProduct);

    } catch (error) {
        console.log("ERRO AO PEGAR PRODUTO INDIVIDUAL");
        res.status(500).json({error: error});
    }

}

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
    const product_id = req.params.id;
    const product = req.body;

    try {
        
        const updatedProduct = await Product.findByIdAndUpdate(product_id, product, { new: true });

        res.status(200).json(updatedProduct);

    } catch (error) {
        console.log("ERRO AO PEGAR PRODUTO INDIVIDUAL");
        res.status(500).json({error: error});
    }

}

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        
        const deletedProduct = await Product.findByIdAndDelete(id);

        res.status(200).json({success: "Produto Deletado com sucesso!"});

    } catch (error) {
        console.log('ERRO AO DELETAR O PRODUTO');
        res.status(500).json({error: error})
    }

}

module.exports = {
    createProduct,
    getAllProducts,
    getAllActiveProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}