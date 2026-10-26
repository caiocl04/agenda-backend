const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // No Docker, a URL de conexão DEVE apontar para o serviço 'mongo'
    const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/agenda_salao';
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;