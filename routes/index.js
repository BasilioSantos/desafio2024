/* AVISO 
 As linhas 8 e 12 foram comentadas para adequação pois uma das instruções é:
 "implemente as operações de manipulação de string dentro do método POST"
 caso estas linhas sejam "descomentadas" e o segundo metodo post apagado termos uma 
 outra abordagem de desenvolvimento.
*/  

//const manipulaStringController = require('../controllers/manipulaStringController');

module.exports = (app)=>{

  //app.post('/api/manipulacao-string', manipulaStringController)
  
  app.post('/api/manipulacao-string', async (req,res)=>{

    const { texto } = req.body 

      if (!texto || typeof texto !== 'string') {
          return res.status(400).json({ error: 'Texto inválido! informe um texto válido! ex: {texto: xxxx}' });
      }
  
    const reverseString = (texto)=> {
      if (texto === "")
        return "";
      else
        return reverseString( texto.substr(1) ) + texto.charAt(0);
    }
          
      const contador = {};
      for (let i = 0; i < texto.length; i++) {
          const c = texto.charAt(i);    
          contador[c] = contador[c] ? contador[c]+1 : 1 
      }
  
        const palindromo = reverseString(texto)==texto ? true : false
        const ocorrencias_caracteres = contador
        const retorno = {palindromo, ocorrencias_caracteres }
  
          return res.json(retorno);

  })
 
}