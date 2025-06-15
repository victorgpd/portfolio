const sideItem = document.querySelectorAll(".side-item");
const cardProject = document.querySelectorAll(".card-project");

function scrollCards(direction) {
  const cardList = document.getElementById("cardList");
  const scrollAmount = 266; // largura do card + margem

  cardList.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

function toggleMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const backdrop = document.getElementById("backdrop");
  const modal = document.getElementById("modalProject");

  if (!modal.classList.contains("hidden")) {
    modal.classList.toggle("hidden");
    backdrop.classList.toggle("hidden");
  } else {
    sideMenu.classList.toggle("hidden");
    backdrop.classList.toggle("hidden");
  }
}

function openModal() {
  const modal = document.querySelector(".modal-project");
  const backdrop = document.getElementById("backdrop");

  if (modal) modal.classList.remove("hidden");
  if (backdrop) backdrop.classList.remove("hidden");
}

function closeModal() {
  const modal = document.querySelector(".modal-project");
  const backdrop = document.getElementById("backdrop");

  if (modal) modal.classList.add("hidden");
  if (backdrop) backdrop.classList.add("hidden");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    document.getElementById("sideMenu").classList.add("hidden");
    document.getElementById("backdrop").classList.add("hidden");
    document.getElementById("modalProject").classList.add("hidden");
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

cardProject.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");
    const image = card.getAttribute("data-img");
    const link = card.getAttribute("data-link");

    const modal = document.querySelector(".modal-project");
    const backdrop = document.getElementById("backdrop");

    const modalTitle = modal.querySelector("h3");
    const modalDesc = modal.querySelector("p");
    const modalImg = modal.querySelector("img");
    const modalLink = modal.querySelector(".btn-open-project");

    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = description;
    if (modalImg) {
      modalImg.src = image;
      modalImg.alt = title;
    }
    if (modalLink) modalLink.href = link;

    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
  });
});
