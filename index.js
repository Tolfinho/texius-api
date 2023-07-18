// Dependências
const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors');
const app = express();
env.config();

// Porta
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true}));

// Routes
const productRoutes = require('./routes/ProductRoutes');
const linhaRoutes = require('./routes/LinhaRoutes');
const orcamentoRoutes = require('./routes/OrcamentoRoutes');
const parceiroRoutes = require('./routes/ParceiroRoutes');
const postRoutes = require('./routes/PostRoutes');
const catalogoRoutes = require('./routes/CatalogoRoutes');

app.use('/product', productRoutes);
app.use('/linha', linhaRoutes);
app.use('/orcamento', orcamentoRoutes);
app.use('/parceiro', parceiroRoutes);
app.use('/post', postRoutes);
app.use('/catalogo', catalogoRoutes);

// Conexão com o banco
try {
  mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.tpnzxtx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  console.log('Banco de Dados conectado!');
} catch (error) {
  console.log('Erro ao conectar ao Banco!');
  console.log(error)
}

app.listen(PORT, () => {
  console.log(`Server rodando na porta -> ${PORT}`);
});
