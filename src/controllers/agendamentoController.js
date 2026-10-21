const Agendamento = require('../models/Agendamento');

exports.criarAgendamento = async (req, res) => {
  try {
    const { cliente, telefone, data, horario, servico } = req.body;

    const jaExiste = await Agendamento.findOne({ data, horario });
    if (jaExiste) {
      return res.status(400).json({ mensagem: 'Este horário já está reservado.' });
    }

    const novoAgendamento = await Agendamento.create({ cliente, telefone, data, horario, servico });
    return res.status(201).json(novoAgendamento);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor.', erro: error.message });
  }
};

exports.listarPorData = async (req, res) => {
  try {
    const { data } = req.params;
    const agendamentos = await Agendamento.find({ data });
    return res.json(agendamentos);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao procurar agendamentos.' });
  }
};