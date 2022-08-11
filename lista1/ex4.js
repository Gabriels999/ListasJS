let n1 = 1;
let n2 = "a";

// Versão com variáveis
if (typeof n1 != "number") {
  console.log("N1 precisa ser numérico");
} else if (typeof n2 != "number") {
  console.log("N2 precisa ser numérico");
} else {
  console.log(n1 + n2);
}

// Versão com funções
function numeroValido(n1, n2) {
  if (typeof n1 != "number" || typeof n2 != "number") {
    console.log("N1 e N2 precisam ser numéricos");
  } else {
    console.log(n1 + n2);
  }
}

numeroValido(n1, n2);
