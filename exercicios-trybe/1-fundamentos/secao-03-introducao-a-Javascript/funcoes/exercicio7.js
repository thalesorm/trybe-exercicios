//Requisito 7 - Crie a função verificaFimPalavra

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split("").reverse().join("");
  let inversoFimPalavra = fimPalavra.split("").reverse().join("");
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true;
    }
  }

  return result;
}