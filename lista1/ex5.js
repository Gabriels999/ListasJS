// Versão com variáveis
temperaturaCelsius = 15;
temperaturaFaren = temperaturaCelsius * 1.8 + 32;
console.log(temperaturaFaren);

// Versão com funções
function celsiusFaren(temp) {
  return console.log(temp * 1.8 + 32);
}

celsiusFaren(15);
