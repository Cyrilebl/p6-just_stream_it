import { categoryContent } from "./categoryContent.js";

export function fetchMoviesByCategory(category_id, category_name, bestMovies) {
  // Category title
  if (category_name !== null) {
    const container_title = document.querySelector(`#${category_id} h2`);
    container_title.innerText =
      category_name.charAt(0).toUpperCase() + category_name.slice(1);
  }

  // Iterate over the movies
  for (let i = 0; i < bestMovies.length && i < 6; i++) {
    const movies = bestMovies[i];
    const movie_name = movies["title"];
    const image_src = movies["image_url"];
    categoryContent(category_id, movie_name, image_src);
  }
}
