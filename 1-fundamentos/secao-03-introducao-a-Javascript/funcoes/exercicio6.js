//Requisito 6 - Crie a função somatório

function somatorio(numero) {
  if (numero < 0) return "ERRO";

  let total = 0;
  for (let index = 1; index <= numero; index += 1) {
    total += index;
  }
  return total;
}