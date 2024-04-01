// Definição dos limites do intervalo e do número secreto
const menorValor = 1 // Menor valor possível do intervalo
const maiorValor = 1000 // Maior valor possível do intervalo
const numeroSecreto = gerarNumeroAleatorio() // Gera um número aleatório dentro do intervalo definido

// Função para gerar um número aleatório dentro do intervalo definido
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1) // Retorna um número inteiro aleatório entre 1 e o maior valor permitido
}
// Exibe o número secreto no console para fins de depuração
console.log('Numero Secreto: ', numeroSecreto)

// Seleciona os elementos HTML que mostram os limites do intervalo na interface
const elementoMenorValor = document.getElementById('menor-valor') // Elemento que exibe o menor valor do intervalo
elementoMenorValor.innerHTML = menorValor // Atualiza o conteúdo do elemento com o menor valor do intervalo

const elementoMaiorValor = document.getElementById('maior-valor') // Elemento que exibe o maior valor do intervalo
elementoMaiorValor.innerHTML = maiorValor // Atualiza o conteúdo do elemento com o maior valor do intervalo
