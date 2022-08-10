function RetornaIdade(AnoNascimento) {
  let AnoAtual = new Date().getFullYear();
  return console.log(AnoAtual - parseInt(AnoNascimento));
}

RetornaIdade(1997);
