export function setCategoryContent(categoryId, movieName, imageSrc) {
  const container = document
    .getElementById(categoryId)
    .querySelector(".container");

  const movieContainer = document.createElement("div");
  movieContainer.classList.add("container__movie");

  const info = document.createElement("div");
  info.classList.add("container__info");

  // Movie title
  const title = document.createElement("h3");
  title.innerText = movieName;

  // Movie image
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = `${movieName} image`;

  // Details button
  const button = document.createElement("button");
  button.innerText = "Détails";
  button.classList.add("open-modal");

  info.append(title, button);
  movieContainer.append(info, image);
  container.append(movieContainer);
}
