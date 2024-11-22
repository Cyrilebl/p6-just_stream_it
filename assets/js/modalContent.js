export function createModalContent(movie) {
  const container = document.getElementById("modal");

  // Movie title
  const movieTitle = movie["title"];
  const title = container.querySelector(".modal__info h2");
  title.innerText = movieTitle;

  // Release year
  const year = movie["year"];
  const yearPublished = container.querySelector(".movie-data p:first-of-type");
  yearPublished.innerText = `${year} - `;

  // Genres
  const genresList = movie["genres"];
  const genres = container.querySelector(".movie-data p:nth-of-type(2)");
  genres.innerText = genresList.join(", ");

  // Duration
  const durationMin = movie["duration"];
  const duration = container.querySelector(
    ".movie-data:nth-of-type(2) p:first-of-type"
  );
  duration.innerText = `${durationMin} minutes`;

  // Countries of origin
  const countriesList = movie["countries"];
  const countries = container.querySelector(
    ".movie-data:nth-of-type(2) p:nth-of-type(2)"
  );
  countries.innerText = `(${countriesList.join(" / ")})`;

  // IMDB score
  const score = movie["imdb_score"];
  const imdbScore = container.querySelector(".score");
  imdbScore.innerText = `IMDB score: ${score}/10`;

  // Directors
  const directorsList = movie["directors"];
  const directors = container.querySelector(".directors");
  directors.innerHTML = `<strong>Réalisé par:</strong><br>
    ${directorsList.join(", ")}`;

  // Image
  const imageUrl = movie["image_url"];
  const image = container.querySelector(".modal__image");
  image.src = imageUrl;
  image.alt = `${movieTitle} image`;

  // Synopsis
  const descriptionText = movie["long_description"];
  const description = container.querySelector(".modal__description");
  description.innerText = descriptionText;

  // Actors
  const actorsList = movie["actors"];
  const actors = container.querySelector(".modal__actors");
  actors.innerHTML = `<strong>Avec:</strong><br>
    ${actorsList.join(", ")}`;
}
