import {
  fetchAllPagesData,
  fetchDataByID,
  fetchDataByParamAndSort,
} from "./fetchData.js";
import { fetchMoviesByCategory } from "./fetchMoviesByCategory.js";
import { seeMoreButton } from "./seeMoreButton.js";
import { setBestMovieContent } from "./setBestMovieContent.js";
import { setupCategoryModals } from "./setupCategoryModals.js";
import { updateCategoryDropdown } from "./updateCategoryDropdown.js";

// Best movie
const highScoreMovies = await fetchDataByParamAndSort("imdb_score_min", 9.5);
const topRatedMovieID = highScoreMovies[0]["id"];

const bestMovieData = await fetchDataByID(topRatedMovieID);
const titleText = bestMovieData["title"];
const descriptionText = bestMovieData["long_description"];
const imageSrc = bestMovieData["image_url"];

setBestMovieContent(titleText, descriptionText, imageSrc);

// First category
const firstCategory = await fetchDataByParamAndSort("genre", "mystery");
fetchMoviesByCategory("first-category", "mystery", firstCategory);

// Second category
const secondCategory = await fetchDataByParamAndSort("genre", "comedy");
fetchMoviesByCategory("second-category", "comedy", secondCategory);

// Third category
const thirdCategory = await fetchDataByParamAndSort("genre", "sport");
fetchMoviesByCategory("third-category", "sport", thirdCategory);

// All categories list
const genresList = await fetchAllPagesData(
  "http://127.0.0.1:8000/api/v1/genres/"
);
updateCategoryDropdown(genresList);

// Choice category
const categoryDropdown = document.getElementById("categories");

categoryDropdown.addEventListener("change", async () => {
  const selectedValue = categoryDropdown.value.toLowerCase();
  const container = document.querySelector("#fourth-category .container");
  container.innerText = "";

  const moviesByCategoryChoice = await fetchDataByParamAndSort(
    "genre",
    selectedValue
  );
  fetchMoviesByCategory("fourth-category", null, moviesByCategoryChoice);

  // Fourth category modal
  const choiceCategoryModalButtons = document.querySelectorAll(
    "#fourth-category .open-modal"
  );
  setupCategoryModals(moviesByCategoryChoice, choiceCategoryModalButtons);
});

// Best movie modal
const bestMovieModalButtons = document.querySelectorAll(
  "#best-movie .open-modal"
);
setupCategoryModals(bestMovieData, bestMovieModalButtons);

// First category modal
const firstCategoryModalButtons = document.querySelectorAll(
  "#first-category .open-modal"
);
setupCategoryModals(firstCategory, firstCategoryModalButtons);

// Second category modal
const secondCategoryModalButtons = document.querySelectorAll(
  "#second-category .open-modal"
);
setupCategoryModals(secondCategory, secondCategoryModalButtons);

// Third category modal
const thirdCategoryModalButtons = document.querySelectorAll(
  "#third-category .open-modal"
);
setupCategoryModals(thirdCategory, thirdCategoryModalButtons);

// Initialize "See More" button functionality
seeMoreButton();
