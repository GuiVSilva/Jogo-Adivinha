const elementoChute = document.getElementById('chute')

// Verifica se o navegador suporta a API de reconhecimento de voz e usa a implementação adequada
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

// Define o idioma para reconhecimento de voz
recognition.lang = 'pt-BR' // Português brasileiro

// Inicia o reconhecimento de voz
recognition.start()

// Evento 'result' é acionado quando uma transcrição de fala é disponibilizada
recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
  // Captura a transcrição de fala
  const chute = event.results[0][0].transcript

  // Exibe o chute na tela
  exibeChuteNaTela(chute)

  // Verifica o chute
  verificaChute(chute)
}

function exibeChuteNaTela(chute) {
  // Atualiza o conteúdo do elemento 'chute' na tela
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
  `
}

// Reinicia o reconhecimento de voz quando termina
recognition.addEventListener('end', () => recognition.start())
