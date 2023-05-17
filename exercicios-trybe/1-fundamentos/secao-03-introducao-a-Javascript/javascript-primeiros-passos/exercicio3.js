// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const number1 = 22;
const number2 = 21;
const number3 = 20;

if (number1 > number2 && number1 > number3) {
  console.log(
    "O primeiro número é igual a " +
      number1 +
      " e é maior que " +
      number2 +
      " e maior que " +
      number3
  );
} else if (number2 > number1 && number2 > number3) {
  console.log(
    "O segundo número é igual a " +
      number2 +
      " e é maior que " +
      number1 +
      " e maior que " +
      number3
  );
} else {
  console.log(
    "O terceiro número é igual a " +
      number3 +
      " e é maior que " +
      number1 +
      " e maior que " +
      number2
  );
}
