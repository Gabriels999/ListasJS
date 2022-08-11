const notas = [1, 6, 5, 10];

// Versão com variáveis
let somaNotas = 0;
for (valor of notas) {
  somaNotas += valor;
}
const mediaAluno = somaNotas / notas.length;
console.log(mediaAluno);

// Versão com funções
function mostraMediaAluno(arr) {
  let total = 0;
  for (valor of arr) {
    total += valor;
  }
  const media = total / arr.length;
  return console.log(media);
}

mostraMediaAluno(notas);
