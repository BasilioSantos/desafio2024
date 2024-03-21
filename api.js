const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//const compression = require('compression')

const routes = require('./routes')
//app.use(compression())
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '100mb'
}));

app.use(bodyParser.json({
  limit: '100mb'
}));
//const router = express.Router();
routes(app)

//app.use('/teste/', routes)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});