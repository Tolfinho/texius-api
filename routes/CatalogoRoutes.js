const router = require("express").Router();

// Controllers
const {
    getAllCatalogos,
    createCatalogo,
    deleteCatalogo
} = require('../controllers/CatalogoController');

// Routes
router.get("/", getAllCatalogos);
router.post("/", createCatalogo);
router.delete("/:id", deleteCatalogo);

module.exports = router;