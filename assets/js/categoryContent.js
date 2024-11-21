export function categoryContent(category_id, movie_name, image_src) {
  const container = document.getElementById(category_id).querySelector("div");
  container.classList.add("container");

  const movie_container = document.createElement("div");
  movie_container.classList.add("movie-container");

  const informations = document.createElement("div");
  informations.classList.add("informations");

  // Movie title
  const movie_title = document.createElement("h3");
  movie_title.innerText = movie_name;

  // Movie image
  const image = document.createElement("img");
  image.src = image_src;
  image.alt = `${movie_name} image`;

  // Details button
  const button = document.createElement("button");
  button.innerText = "Détails";
  button.classList.add("open-modal");

  informations.append(movie_title, button);
  movie_container.append(informations, image);
  container.append(movie_container);
}
