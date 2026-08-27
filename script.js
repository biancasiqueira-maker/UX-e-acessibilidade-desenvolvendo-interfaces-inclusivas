let bntAjuda = document.querySelector(".botao-ajuda-inicio");
let bntFechar = document.querySelector(".botao-fechar-inicio");
let modal = document.querySelector(".botao-ajuda-inicio");

bntAjuda.addEventListener("click", abreModal);
bntFechar.addEventListener("click", fechaModal);

function abreModal() {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}

function fecharModalGolpe() {
  const modal = document.getElementById('modalGolpe');
  if (modal) {
    modal.style.display = 'none';
  }
}

const msg = new SpeechSynthesisUtterance();
msg.text = "Olá! Este é um teste de voz mais natural.";

// Espera carregar as vozes disponíveis no navegador
window.speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices();
  
  // 1. Escolha uma voz que soe mais natural (vozes 'Google' ou 'Natural' costumam ser melhores)
  const vozpt = voices.find(voice => voice.lang.includes('pt') && voice.name.includes('Google'));
  if (vozpt) msg.voice = vozpt;

  // 2. Ajuste a velocidade e o tom (valores entre 0.8 e 1.2 evitam o tom robótico)
  msg.rate = 1.0;  // Velocidade da fala
  msg.pitch = 1.0; // Tom da voz

  // Executa a fala
  window.speechSynthesis.speak(msg);
};