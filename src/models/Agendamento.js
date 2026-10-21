const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  telefone: { type: String, required: true },
  data: { type: String, required: true },    // Formato: AAAA-MM-DD
  horario: { type: String, required: true }, // Formato: HH:MM
  servico: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);