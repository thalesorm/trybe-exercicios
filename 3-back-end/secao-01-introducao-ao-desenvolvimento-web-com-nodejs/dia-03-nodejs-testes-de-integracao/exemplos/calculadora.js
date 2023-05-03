function calculaSituacao(media) {
  console.log(media);
  if (media >= 4) {
    return "aprovação";
  }

  return "reprovação";
}

module.exports = calculaSituacao;
