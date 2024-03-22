const manipulaStringService = require('../services/manipulaStringService');

module.exports = async (req, res) => {
  try {
    const { texto } = req.body 

    if (!texto || typeof texto !== 'string') {
      return res.status(400).json({ error: 'Texto inválido! informe um texto válido! ex: {texto: xxxx}' });
  }

      const palindromo = manipulaStringService.palindromo(texto);
      const ocorrencias_caracteres = manipulaStringService.quantidadePorCaracter(texto)
      const retorno = {palindromo, ocorrencias_caracteres }

        return res.json(retorno);
    } catch (error) {
        console.error('Erro ao manipular o texto:', error);
        return res.status(500).json({ error: 'Erro ao processar o texto' });
    }
};