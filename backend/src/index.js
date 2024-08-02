const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes/commentsRoutes");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado"))
  .catch(err => console.error('Falha ao conectar', err));

app.use(express.json());

app.use('/comments', router);

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type'] // Cabeçalhos permitidos
}));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
