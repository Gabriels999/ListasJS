// Versão com variáveis
const verdadeiro = "yes";
const falso = "VALOR";

console.log(falso.toLowerCase().includes("s" || "y" || "yes" || "sim" || "1"));

// Versão com funções
function verdadeiroFalso(texto) {
  console.log(
    texto.toLowerCase().includes("s" || "y" || "yes" || "sim" || "1")
  );
}

verdadeiroFalso(verdadeiro);
verdadeiroFalso(falso);
