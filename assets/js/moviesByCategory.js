function moviesByCategory(category_id, movie_name, image_src) {
    const container = document.getElementById(category_id).querySelector("div")
    container.classList.add("container")

    const movie_container = document.createElement("div")
    movie_container.classList.add("movie-container")

    const title_div = document.createElement("div")
    title_div.classList.add("title-div")

    // Movie title
    const movie_title = document.createElement("h3")
    movie_title.innerText = movie_name

    // Movie image
    const image = document.createElement("img")
    image.src = image_src

    // Details button
    const button = document.createElement("button")
    button.innerText = "Détails"
    button.classList.add("details")

    title_div.append(movie_title, button)
    movie_container.append(title_div, image)
    container.append(movie_container)
}

export function fetchMovieData(category_id, category_name, bestMovies){
    // Category title
    if(category_name !== null) {
    const container = document.getElementById(category_id)
    const category = document.createElement("h2")
    category.innerText = category_name.charAt(0).toUpperCase() + category_name.slice(1);
    container.append(category)
    }

    let i = 0
    while(i < 6){
    const movies = bestMovies[i]
    const movie_name = movies["title"]
    const image_src = movies["image_url"]
    moviesByCategory(category_id, movie_name, image_src)
    i++
    }
}