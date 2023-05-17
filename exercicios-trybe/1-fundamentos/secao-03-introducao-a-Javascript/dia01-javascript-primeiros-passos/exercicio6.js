// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

const xadrez = 'Peão';

switch (xadrez.toLocaleLowerCase) {
  case "Peão":
    console.log("Apenas para frente");
    break;
  case "Torre":
    console.log("Em L quantas casa quiser");
    break;
  case "Bispo":
    console.log("Apenas diagonais");
    break;
  case "Rainha":
    console.log("Quantas casa quiser para qualquer direção");
    break;
  case "Rei":
    console.log("Apenas uma casa para qualquer direção");
    break;
}