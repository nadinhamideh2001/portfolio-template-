// MODAL EDITORIAL
const projectRows = document.querySelectorAll(".project-row");
const modal = document.getElementById("project-modal");
const modalOverlay = modal.querySelector(".project-modal-overlay");
const modalClose = modal.querySelector(".project-close");

const modalHero = document.getElementById("modal-hero");
const modalThumbs = document.getElementById("modal-thumbs");
const modalTitle = document.getElementById("modal-title");
const modalTextMain = document.getElementById("modal-text-main");
const modalTextSecondary = document.getElementById("modal-text-secondary");

// abrir modal
projectRows.forEach((row) => {
  row.addEventListener("click", () => {
    modalTitle.textContent = row.dataset.title;
    modalTextMain.textContent = row.dataset.textMain;
    modalTextSecondary.textContent = row.dataset.textSecondary;

    modalHero.src = row.dataset.hero;

    modalThumbs.innerHTML = "";
    row.dataset.thumbs.split(",").forEach((t) => {
      const img = document.createElement("img");
      img.src = t.trim();
      img.alt = row.dataset.title;
      modalThumbs.appendChild(img);
    });

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  });
});

// cerrar
function closeModal() {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
