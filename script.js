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

// JavaScript
function diminuirFonte() {
  const elementoTexto = document.getElementById('texto');
  
  // Obtém o tamanho atual da fonte em pixels
  const estilo = window.getComputedStyle(elementoTexto);
  const tamanhoAtual = parseFloat(estilo.fontSize);
  
  // Define o limite mínimo (ex: 10px) para o texto não sumir
  if (tamanhoAtual > 10) {
    elementoTexto.style.fontSize = (tamanhoAtual - 2) + 'px';
  }
}