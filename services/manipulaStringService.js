const reverseString = (texto)=> {
  if (texto === "")
    return "";
  else
    return reverseString( texto.substr(1) ) + texto.charAt(0);
}

const palindromo = (texto)=> {
  return reverseString(texto)==texto
}

const quantidadePorCaracter = (texto)=> {
  const contador = {};
  for (let i = 0; i < texto.length; i++) {
      const c = texto.charAt(i);    
      contador[c] = contador[c] ? contador[c]+1 : 1 
  }
    return contador;
  }

module.exports = {
palindromo,
quantidadePorCaracter
}