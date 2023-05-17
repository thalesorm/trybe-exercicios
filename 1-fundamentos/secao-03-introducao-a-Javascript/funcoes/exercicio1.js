// Crie a função verificaPalindromo

function verificaPalindromo(string) {
  for (index in string) {
    if (string[index] !== string[(string.length - 1) - index]) {
      return false;
    }
  }
  return true;
}

verificaPalindromo('teneth')