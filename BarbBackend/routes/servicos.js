const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoscontroller.js');

router.get('/', servicoController.getServico);
router.get('/:id', servicoController.getServicoId);

router.post('/', servicoController.createServico);
router.put('/:id', servicoController.updateServico);
router.delete('/:id', servicoController.deleteServico);


module.exports = router;