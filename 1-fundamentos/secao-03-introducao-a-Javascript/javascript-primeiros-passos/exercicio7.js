// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

const porcentagem = 49;

if (porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80 && porcentagem < 90) {
  console.log("B");
} else if (porcentagem >= 70 && porcentagem < 80) {
  console.log("C");
} else if (porcentagem >= 60 && porcentagem < 70) {
  console.log("D");
} else if (porcentagem >= 50 && porcentagem < 60) {
  console.log("E");
} else if (porcentagem < 50) {
  console.log("F");
}