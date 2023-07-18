const router = require("express").Router();

// Controllers
const {
    createOrcamento,
    getAllOrcamento,
    getSingleOrcamento,
    sendOrcamentoEmail,
} = require('../controllers/OrcamentoController');

// Routes
router.post('/', createOrcamento);
router.get('/all', getAllOrcamento);
router.post('/sendemail', sendOrcamentoEmail);
router.get('/:id', getSingleOrcamento);

module.exports = router;