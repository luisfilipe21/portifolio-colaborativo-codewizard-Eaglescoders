const express = required('express');
const mongoose = required('mongoose');
dotenv.config();

const app = express();
const PORT = process.dotenv.PORT || 5000;


mongoose.connect(process.dotenv.MONGO_URI)
.then(()=> console.log("Conectado"))
.catch(err => console.error('falha ao conectar', err));

app.use(express.json());

app.get('/comments', getcomments);

app.lister(PORT, ()=>{
  console.log(`Servidor Rodando na Porsta ${PORT}`)
})
