import { fetchData, fetchAllPagesData, fetchDataByID, fetchDataByParamAndSort } from "./fetchData.js"
import { fetchMovieData } from "./moviesByCategory.js"
import { bestMovie } from "./bestMovie.js"
import { fetchAllCategories } from "./fecthAllCategories.js"
import { createModalContent } from "./modalContent.js"
import { openModal, closeModal } from "./openAndCloseModal.js"

// Best movie
const best_score_data = await fetchDataByParamAndSort("imdb_score_min", 9.5)
const url = best_score_data[0]["url"]

const details = await fetchData(url)
const title_text = details["title"]
const description_text = details["long_description"]
const image_src = details["image_url"]

bestMovie(title_text, description_text, image_src)

// First category
const first_category_best_movies = await fetchDataByParamAndSort("genre", "mystery")
fetchMovieData("first-category", "mystery", first_category_best_movies)

// Second category
const second_category_best_movies = await fetchDataByParamAndSort("genre", "comedy")
fetchMovieData("second-category", "comedy", second_category_best_movies)

// Third category
const third_category_best_movies = await fetchDataByParamAndSort("genre", "sport")
fetchMovieData("third-category", "sport", third_category_best_movies)

// All categories list
const all_categories = await fetchAllPagesData("http://127.0.0.1:8000/api/v1/genres/")
fetchAllCategories(all_categories)

// Choice category
const selectElement = document.getElementById("categories");

selectElement.addEventListener("change", async ()=> {
  const selectedValue = selectElement.value.toLowerCase()
  const container = document.getElementById("fourth-category")
  container.innerHTML = ""
  const newDiv = document.createElement("div")
  container.append(newDiv)

  const category_choice_best_movies = await fetchDataByParamAndSort("genre", selectedValue)
  fetchMovieData("fourth-category", null, category_choice_best_movies)
})

// Modal informations
const id = details["id"]
const best_movie = await fetchDataByID(id)
//createModalContent(best_movie)

// Open and close modal
const open_modal = document.querySelectorAll(".open-modal")
open_modal.forEach((modalButton) => {
  modalButton.addEventListener("click", openModal)
});

const close_modal = document.querySelector(".close-modal");
if (close_modal) {
  close_modal.addEventListener("click", closeModal);
}


function detailsButton (category, open_btn) {
    const firstSixMovies = category.slice(0, 6);

    for (let i = 0; i < firstSixMovies.length; i++) {
    const movieID = firstSixMovies[i]["id"]

    const open_modal = open_btn[i];

    open_modal.addEventListener("click", async () => {
        const movieData = await fetchDataByID(movieID)
        createModalContent(movieData)

        const close_modal = document.querySelector(".close-modal");
    if (close_modal) {
    close_modal.addEventListener("click", closeModal);
    }
    });
    }
}

// First category modal
const open_btn_first = document.querySelectorAll("#first-category .open-modal")
detailsButton(first_category_best_movies, open_btn_first)

// Second category modal
const open_btn_second = document.querySelectorAll("#second-category .open-modal")
detailsButton(second_category_best_movies, open_btn_second)

// Third category modal
const open_btn_third = document.querySelectorAll("#third-category .open-modal")
detailsButton(third_category_best_movies, open_btn_third)
