const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const routes = require('./routes')

app.use(bodyParser.json());
routes(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});