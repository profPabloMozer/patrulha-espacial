/*
  main.js — O "CÉREBRO" DA NAVEGAÇÃO
  Chamado pelo index.html (a última linha, <script src="js/main.js">).
  Por enquanto faz uma coisa só: trocar de tela quando um botão é clicado.
  Nas próximas etapas, os outros arquivos (quiz, validadores, relatório)
  serão chamados a partir daqui.
*/

// Mostra a tela com o id informado e esconde todas as outras.
// Exemplo: mostrarTela("tela-jogar") faz a tela de escolha de missão aparecer.
function mostrarTela(idDaTela) {
  // 1) Esconde todas as telas (tira a classe "ativa" de cada uma)
  document.querySelectorAll(".tela").forEach(function (tela) {
    tela.classList.remove("ativa");
  });

  // 2) Mostra só a tela pedida (põe a classe "ativa" nela)
  document.getElementById(idDaTela).classList.add("ativa");

  // 3) Volta ao topo da página (útil no celular)
  window.scrollTo(0, 0);
}

// Liga os botões: todo elemento que tem data-ir="..." no HTML
// vira um botão de navegação para a tela indicada.
document.querySelectorAll("[data-ir]").forEach(function (botao) {
  botao.addEventListener("click", function () {
    mostrarTela(botao.dataset.ir); // dataset.ir = o valor escrito em data-ir
  });
});
