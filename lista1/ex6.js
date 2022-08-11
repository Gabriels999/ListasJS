// Versão com variáveis
const texto = "O rato roeu a roupa do rei de Roma";
let textoInvertido = "";
for (i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}
console.log(texto);
console.log(textoInvertido);

// Versão com funções
function inverteString(str) {
  let strInvertida = "";
  for (i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }
  console.log(strInvertida);
}
inverteString(texto);
