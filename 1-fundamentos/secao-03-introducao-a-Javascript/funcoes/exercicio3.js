//Requisito 3 - Crie a função indiceDoMenor

function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = Number(indice);
    }
  }
  return indiceMenor;
}
