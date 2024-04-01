// Função para verificar se o chute do usuário é válido e se acertou o número secreto
function verificaChute(chute) {
  const numero = +chute // Converte o chute para um número

  // Verifica se o chute é inválido (não é um número)
  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>' // Adiciona uma mensagem de erro na interface
    return // Encerra a execução da função
  }
  // Verifica se o número está fora do intervalo permitido
  if (numeroMaiorOuMenorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>` // Adiciona uma mensagem de erro na interface com os limites permitidos
  }
  // Verifica se o número é igual ao número secreto
  if (numero === numeroSecreto) {
    // Se acertou o número secreto, exibe uma mensagem de acerto e o número secreto na interface
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  } else if (numero > numeroSecreto) {
    // Se o número é maior que o número secreto, exibe uma mensagem indicando que o número secreto é menor
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    // Se o número é menor que o número secreto, exibe uma mensagem indicando que o número secreto é maior
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  }
}

// Função para verificar se o chute é inválido (não é um número)
function chuteInvalido(numero) {
  return Number.isNaN(numero) // Retorna true se o número não é um número, senão retorna false
}
// Função para verificar se o número está fora do intervalo permitido
function numeroMaiorOuMenorPermitido(numero) {
  return numero > maiorValor || numero < menorValor // Retorna true se o número está fora do intervalo permitido, senão retorna false
}

// Evento de clique para reiniciar o jogo quando o botão "Jogar novamente" é clicado
document.body.addEventListener('click', () => {
  if (event.target.id == 'jogar-novamente') {
    window.location.reload() // Recarrega a página para jogar novamente
  }
})
