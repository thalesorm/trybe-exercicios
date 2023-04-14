// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const triangule1 = -60;
const triangule2 = -60;
const triangule3 = -61;

let sum = triangule1 + triangule2 + triangule3;
let positive = triangule1 > 0 && triangule2 > 0 && triangule3 > 0;

if(positive) {
  if(sum === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro: Ângulo inválido');
}