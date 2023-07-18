const router = require("express").Router();

// Controllers
const { 
    createProduct, 
    getAllProducts, 
    getAllActiveProducts, 
    getSingleProduct,
    updateProduct, 
    deleteProduct 
} = require("../controllers/ProductController");

// Routes
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/active", getAllActiveProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router