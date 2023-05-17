//Requisito 5 - Crie a função maisRepetido

function repeticoesPorNumero(numeros) {
  let num = {};
  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] += 1;
    }
  }
  return num;
}

function maisRepetido(numeros) {
  let num = repeticoesPorNumero(numeros);

  let contRepetido = 0;
  let contNumero = 0;
  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = Number(prop);
    }
  }
  return contNumero;
}