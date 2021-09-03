'use strict';
const botaoClicar = window.document.querySelector(".botaoClicar");
botaoClicar.addEventListener('click', encaminharUsuario);

function encaminharUsuario () {
    let meuTitulo =  window.document.querySelector("div#res");
    let minhaCidade = prompt('Em que cidade você mora? Digite: ');
    meuTitulo.innerHTML = `<h2>Detectamos que você fala de ${minhaCidade}. Nós faremos o seu match com mentor o mais breve possível. Verifique seu e-mail em 10 dias. Obrigado por escolher Mentorama!<h2>`;
}

