const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "🎉 Você clicou no botão! Parabéns pelo seu primeiro projeto!";
});
