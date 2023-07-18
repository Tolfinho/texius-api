const router = require("express").Router();

// Controllers
const {
  createParceiro,
  getAllRepresentante,
  getAllAct,
  getSingleParceiro,
  updateParceiro,
  patchParceiro,
  deleteParceiro,
} = require("../controllers/ParceiroController");

// Routes
router.post("/", createParceiro);
router.get("/representante", getAllRepresentante);
router.get("/act", getAllAct);
router.get("/:id", getSingleParceiro);
router.put("/:id", updateParceiro);
router.patch("/:id", patchParceiro);
router.delete("/:id", deleteParceiro);

module.exports = router;
