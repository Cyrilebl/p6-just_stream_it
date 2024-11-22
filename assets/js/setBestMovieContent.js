export function setBestMovieContent(titleText, descriptionText, imageSrc) {
  const container = document.querySelector(".best-movie__container");
  const imageContainer = container.querySelector(".best-movie__image");
  const infoContainer = container.querySelector(".best-movie__info");

  // Movie title
  const title = infoContainer.querySelector("h2");
  title.innerText = titleText;

  // Movie description
  const description = infoContainer.querySelector("p");
  description.innerText = descriptionText;

  // Movie image
  const image = imageContainer.querySelector("img");
  image.src = imageSrc;
  image.alt = `${titleText} image`;
}
