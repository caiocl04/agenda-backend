require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/agendamentos', agendamentoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a rodar na porta ${PORT}`);
});