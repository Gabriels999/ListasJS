// Versão com variáveis
const vogais = ["a", "e", "i", "o", "u"];
const entrada = "b";

if (vogais.indexOf(entrada.toLowerCase()) != -1) {
  console.log("Vogal");
} else {
  console.log("Consoante");
}

// Versão com funções

function vogalConsoante(str) {
  if (vogais.indexOf(str.toLowerCase()) != -1) {
    console.log("Vogal");
  } else {
    console.log("Consoante");
  }
}

vogalConsoante(entrada);
