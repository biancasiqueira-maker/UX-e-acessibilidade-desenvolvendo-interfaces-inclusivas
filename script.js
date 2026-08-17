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