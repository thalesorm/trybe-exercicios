//Requisito 2 - Crie a função indiceDoMaior

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = Number(indice);
    }
  }
  console.log(indiceMaior);
}

indiceDoMaior([0,1,5,7,5,14])