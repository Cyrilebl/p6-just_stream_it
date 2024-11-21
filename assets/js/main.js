import { bestMovieContent } from "./bestMovieContent.js";
import { fetchAllCategories } from "./fecthAllCategories.js";
import {
  fetchAllPagesData,
  fetchData,
  fetchDataByParamAndSort,
} from "./fetchData.js";
import { fetchMoviesByCategory } from "./fetchMoviesByCategory.js";
import { modalForCategories } from "./modal.js";

// Best movie
const best_score_data = await fetchDataByParamAndSort("imdb_score_min", 9.5);
const url = best_score_data[0]["url"];

const details = await fetchData(url);
const title_text = details["title"];
const description_text = details["long_description"];
const image_src = details["image_url"];

bestMovieContent(title_text, description_text, image_src);

// First category
const first_category_best_movies = await fetchDataByParamAndSort(
  "genre",
  "mystery"
);
fetchMoviesByCategory("first-category", "mystery", first_category_best_movies);

// Second category
const second_category_best_movies = await fetchDataByParamAndSort(
  "genre",
  "comedy"
);
fetchMoviesByCategory("second-category", "comedy", second_category_best_movies);

// Third category
const third_category_best_movies = await fetchDataByParamAndSort(
  "genre",
  "sport"
);
fetchMoviesByCategory("third-category", "sport", third_category_best_movies);

// All categories list
const all_categories = await fetchAllPagesData(
  "http://127.0.0.1:8000/api/v1/genres/"
);
fetchAllCategories(all_categories);

// Choice category
const selectElement = document.getElementById("categories");

selectElement.addEventListener("change", async () => {
  const selectedValue = selectElement.value.toLowerCase();
  const container = document.getElementById("fourth-category");
  container.innerHTML = "";
  const newDiv = document.createElement("div");
  container.append(newDiv);

  const category_choice_best_movies = await fetchDataByParamAndSort(
    "genre",
    selectedValue
  );
  fetchMoviesByCategory("fourth-category", null, category_choice_best_movies);
  console.log(category_choice_best_movies);

  // Fourth category modal
  const open_btn_choice = document.querySelectorAll(
    "#fourth-category .open-modal"
  );
  modalForCategories(category_choice_best_movies, open_btn_choice);
});

// Best movie modal
const open_btn_best_movie = document.querySelectorAll(
  "#best-movie .open-modal"
);
modalForCategories(details, open_btn_best_movie);

// First category modal
const open_btn_first = document.querySelectorAll("#first-category .open-modal");
modalForCategories(first_category_best_movies, open_btn_first);

// Second category modal
const open_btn_second = document.querySelectorAll(
  "#second-category .open-modal"
);
modalForCategories(second_category_best_movies, open_btn_second);

// Third category modal
const open_btn_third = document.querySelectorAll("#third-category .open-modal");
modalForCategories(third_category_best_movies, open_btn_third);
