const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const aberto = nav.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
  menuBtn.textContent = aberto ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("aberto");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

const mensagem = document.getElementById("mensagem");
document.querySelectorAll(".comprar").forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = botao.dataset.produto;
    mensagem.textContent = `${produto} foi selecionado! Em breve você poderá finalizar seu pedido.`;
  });
});
