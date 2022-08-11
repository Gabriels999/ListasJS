const entrada = [1, 3, 5, 7, 8];

function imparPar(arr) {
  let saida = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      saida.push("par");
    } else {
      saida.push("impar");
    }
  }
  return saida;
}

console.log(imparPar(entrada));
