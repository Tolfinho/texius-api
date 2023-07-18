const router = require("express").Router();

// Controllers
const {
  createLinha,
  getAllLinha,
  updateLinha,
  deleteLinha,
} = require("../controllers/LinhaController");

// Routes
router.post("/", createLinha);
router.get("/", getAllLinha);
router.put("/:id", updateLinha);
router.delete("/:id", deleteLinha);

module.exports = router;
