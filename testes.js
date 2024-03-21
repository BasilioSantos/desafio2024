let body = {texto: "mirima"}

function reverseString(str) {
  if (str === "")
    return "";
  else
  //console.log(str.substr(1) +'>'+ str.charAt(0))
    return reverseString(str.substr(1)) + str.charAt(0);
}

function contarCaracteres(str, caractere) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === caractere) {
          contador++;
      }
  }
  return contador;
}

function caracteresUnicos(str) {
  return [...new Set(str)];
}

function totalizarCaracteres(texto) {
  const contador = {};

  for (let i = 0; i < texto.length; i++) {
      const c = texto.charAt(i);
  
      if (contador[c]) {
          contador[c]++;
      } else {
          contador[c] = 1;
      }
  }
  
  return contador;
}

// Exemplo de uso:
const minhaString = "Hello, World!";
const resultado = totalizarCaracteres(minhaString);

console.log('resultado ', resultado)

console.log('exe ', reverseString("hello"), caracteresUnicos("hello"))

