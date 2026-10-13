const botaoConhecer = document. getElementById("conhecerBtn");
const conteudoHero = document.querySelector(".hero__content");
const cards = document.getElementById("propertyCards");

console.log("Botão:", botaoConhecer);
console.log("Conteúdo:", conteudoHero);
console.log("Cards:", cards);
botaoConhecer.addEventListener("click", () => {
    
    conteudoHero.classList.add("esconder");
    cards.classList.add("mostrar");
});
document.querySelectorAll(".property__card").forEach((card) => {
    card.addEventListener("animationend", () => {
        card.style.animation = "none";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    });
});