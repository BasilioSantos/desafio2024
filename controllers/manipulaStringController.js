const manipulaStringService = require('../services/manipulaStringService');

module.exports = async (req, res) => {
  try {
  console.log('req.body ',req.body)
    const { texto } = req.body 

    if (!texto) {
        return res.status(400).json({ error: 'Texto inválido' });
    }

      const palindromo = manipulaStringService.palindromo(texto);
      const ocorrencias_caracteres = manipulaStringService.quantidadePorCaracter(texto)
      const retorno = {palindromo, ocorrencias_caracteres }

        return res.json(retorno);
    } catch (error) {
        console.error('Erro ao mainuplar o texto:', error);
        return res.status(500).json({ error: 'Erro ao processar o texto' });
    }
};