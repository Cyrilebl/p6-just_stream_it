export function createModalContent(movie){
    const container = document.getElementById("modal")

    const left = document.createElement("div")
    const right = document.createElement("div")
    const top = document.createElement("div")
    const bottom = document.createElement("div")

    left.classList.add("left")
    right.classList.add("right")
    top.classList.add("top")
    bottom.classList.add("bottom")

    const year_genres_div = document.createElement("div")
    year_genres_div.classList.add("movie-data")

    const pg_duration_countries_div = document.createElement("div")
    pg_duration_countries_div.classList.add("movie-data")

    const imdb_score_div = document.createElement("div")
    imdb_score_div.classList.add("movie-data")

    // Movie title
    const title_text = movie["title"]
    const title = document.createElement("h2")
    title.innerText = title_text

    // Release year
    const year = movie["year"]
    const year_published = document.createElement("p")
    year_published.innerText = `${year} - `

    // Genres
    const genres_list = movie["genres"]
    const genres = document.createElement("p")
    genres.innerText = genres_list.join(", ");

    year_genres_div.append(year_published, genres)

    // Duration
    const duration_min = movie["duration"]
    const duration = document.createElement("p")
    duration.innerText = `${duration_min} minutes`

    // Countries of origin
    const countries_list = movie["countries"]
    const countries = document.createElement("p")
    countries.innerText = `(${countries_list.join(" / ")})`

    pg_duration_countries_div.append(duration, countries)

    // IMDB score
    const score = movie["imdb_score"]
    const imdb_score = document.createElement("p")
    imdb_score.innerText = `IMDB score: ${score}/10`

    imdb_score_div.append(imdb_score)

    // Directors
    const directors_list = movie["directors"]
    const directors = document.createElement("p")
    directors.innerHTML = `<strong>Réalisé par:</strong><br>
    ${directors_list.join(", ")}`
    directors.classList.add("directors")

    // Image
    const image_url = movie["image_url"]
    const image = document.createElement("img")
    image.src = image_url
    image.alt = `${title_text} image`

    // Synopsis
    const description_text = movie["long_description"]
    const description = document.createElement("p")
    description.innerText = description_text

    // Actors
    const actors_list = movie["actors"]
    const actors = document.createElement("p")
    actors.innerHTML = `<strong>Avec:</strong><br>
    ${actors_list.join(", ")}`
    actors.classList.add("actors")

    // Close button
    const button_container = document.createElement("div")
    button_container.classList.add("button-container")
    const button = document.createElement("button")
    button.innerText = "Fermer"
    button.classList.add("close-modal")
    button_container.appendChild(button)

    left.append(title, year_genres_div, pg_duration_countries_div, imdb_score_div, directors)
    right.append(image)
    top.append(description)
    bottom.append(actors, button_container)

    container.append(left, right, top, bottom)
}