import { createModalContent } from "./modalContent.js"
import { openModal, closeModal } from "./openAndCloseModal.js"
import { fetchDataByID } from "./fetchData.js"

export function modalForCategories (category, open_btn) {
      // Ensure category is always an array
    const categoriesArray = Array.isArray(category) ? category : [category];

    // Determine the number of movies/buttons to process
    const numberOfMovies = Math.min(categoriesArray.length, open_btn.length);
    
    // Slice to match the number of buttons
    const firstMovies = categoriesArray.slice(0, numberOfMovies);

    for (let i = 0; i < numberOfMovies; i++) {
        const movieID = firstMovies[i]["id"];
        // Open and close modal
        const open_modal = open_btn[i];

    open_modal.addEventListener("click", async () => {
        const movieData = await fetchDataByID(movieID)
        createModalContent(movieData)

        openModal()

        const close_modal = document.querySelector(".close-modal");
        close_modal.addEventListener("click", closeModal);
      });
    }
}