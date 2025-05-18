const sideItem = document.querySelectorAll(".side-item");

function scrollCards(direction) {
  const cardList = document.getElementById("cardList");
  const scrollAmount = 266; // largura do card + margem

  cardList.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("hidden");
  document.getElementById("backdrop").classList.toggle("hidden");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    document.getElementById("sideMenu").classList.add("hidden");
    document.getElementById("backdrop").classList.add("hidden");
  }
});

sideItem.forEach((btn, i) => {
  const targets = ["#home", "#sobre", "#habilidades", "#projetos", "#contato"];
  btn.addEventListener("click", () => {
    console.log(targets[i]);
    document.querySelector(targets[i])?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  });
});
