const readline = require('readline-sync')
const pesoCorporal = readline.question(`Qual é o seu peso (kg)? `);
const aluraCentimetros = readline.question(`qual é a sua altura em centimetros? `);

function handleBMI(peso, altura) {
  console.log(`Seu peso: ${peso}kg. Sua altura: ${altura}cm`);
  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros * alturaEmMetros;

  const imc = peso / alturaAoQuadrado;

  return imc;
}

function main() {
  const imc = handleBMI(pesoCorporal, aluraCentimetros);
  console.log(`seu imc é: ${imc.toFixed(2)}`);
    if(imc < 18.5) {
      console.log('Abaixo do peso');
    } if (imc >= 18.5 && imc <= 24.9) {
      console.log('peso normal');
    } if (imc >= 25.0 && imc <= 29.9) {
      console.log('acima do peso (sobrepeso)');
    } if (imc >= 30 && imc <= 34.9) {
      console.log('obesidade grau I');
    } if (imc => 35 && imc <= 39.9) {
      console.log('obesidade grau II');
    } if (imc >= 40) {
      console.log('obesidade grau III e IV');
  }
}

main();
