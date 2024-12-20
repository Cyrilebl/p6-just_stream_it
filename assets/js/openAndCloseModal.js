export function openModal() {
  const modal = document.getElementById("modal");

  modal.classList.remove("hidden");
  modal.classList.add("visible");
  modal.scrollTop = 0;
  document.body.classList.add("visible");

  const overlay = document.getElementById("modal-overlay");
  overlay.style.display = "block";
}

export function closeModal() {
  const modal = document.getElementById("modal");

  modal.classList.remove("visible");
  modal.classList.add("hidden");
  document.body.classList.remove("visible");

  const overlay = document.getElementById("modal-overlay");
  overlay.style.display = "none";
}
