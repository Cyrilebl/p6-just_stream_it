import { fetchData, fetchAllPagesData, fetchDataByParam, fetchDataByParamAndSort } from "./fetchData.js"
import { fetchMovieData } from "./moviesByCategory.js"
import { bestMovie } from "./bestMovie.js"
import { fetchAllCategories } from "./fecthAllCategories.js"

// Best movie
const best_score_data = await fetchDataByParamAndSort("imdb_score_min", 9.5)
const title_text = best_score_data[0]["title"]

const url = best_score_data[0]["url"]
const details = await fetchData(url)
const description_text = details["long_description"]
const image_src = details["image_url"]

bestMovie(title_text, description_text, image_src)

const modal = document.getElementById("modal")

const details_open_btn = document.querySelector(".details")
details_open_btn.addEventListener("click", () => {
  modal.classList.remove("hidden")
  modal.classList.add("visible")
})

const details_close_btn = document.querySelector(".close-modal")
details_close_btn.addEventListener("click", () => {
  modal.classList.remove("visible")
  modal.classList.add("hidden")
})

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
