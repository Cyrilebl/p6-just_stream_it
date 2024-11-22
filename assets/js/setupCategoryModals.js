import { fetchDataByID } from "./fetchData.js";
import { createModalContent } from "./modalContent.js";
import { closeModal, openModal } from "./openAndCloseModal.js";

export function setupCategoryModals(category, modalButtons) {
  // Ensure category is always an array
  const categoryMovies = Array.isArray(category) ? category : [category];

  // Determine the number of movies/buttons to process
  const movieCount = Math.min(categoryMovies.length, modalButtons.length);

  // Slice to match the number of buttons
  const moviesToShow = categoryMovies.slice(0, movieCount);

  for (let i = 0; i < movieCount; i++) {
    const movieID = moviesToShow[i]["id"];
    // Open and close modal
    const modalButton = modalButtons[i];

    modalButton.addEventListener("click", async () => {
      const movieData = await fetchDataByID(movieID);
      createModalContent(movieData);

      openModal();

      const closeModalButton = document.querySelector(".close-modal");
      closeModalButton.addEventListener("click", closeModal);
    });
  }
}
