

const manipulaStringController = require('../controllers/manipulaStringController');

module.exports = (app)=>{

  app.post('/api/manipulacao-string', manipulaStringController)
 
}