const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/', agendamentoController.criarAgendamento);
router.get('/:data', agendamentoController.listarPorData);

module.exports = router;
