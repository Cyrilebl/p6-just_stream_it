import { setCategoryContent } from "./setCategoryContent.js";

export function fetchMoviesByCategory(categoryId, categoryName, bestMovies) {
  // Category title
  if (categoryName !== null) {
    const categoryTitle = document.querySelector(`#${categoryId} h2`);
    categoryTitle.innerText =
      categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  }

  // Iterate over the movies
  for (let i = 0; i < bestMovies.length && i < 6; i++) {
    const movies = bestMovies[i];
    const movieName = movies["title"];
    const imageSrc = movies["image_url"];
    setCategoryContent(categoryId, movieName, imageSrc);
  }
}
