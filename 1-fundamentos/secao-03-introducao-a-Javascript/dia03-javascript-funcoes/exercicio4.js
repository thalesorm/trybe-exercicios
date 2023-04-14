//Requisito 4 - Crie a função maiorPalavra

function maiorPalavra(palavras) {
  let maior = palavras[0];
  for (let indice in palavras) {
    if (maior.length < palavras[indice].length) {
      maior = palavras[indice];
    }
  }
  return maior;
}