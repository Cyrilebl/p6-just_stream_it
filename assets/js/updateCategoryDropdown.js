export function updateCategoryDropdown(genresList) {
  const container = document.getElementById("categories");
  const excludedGenres = ["Mystery", "Comedy", "Sport"];

  for (let i = 0; i < genresList.length; i++) {
    const genreName = genresList[i]["name"];

    if (!excludedGenres.includes(genreName)) {
      const optionElement = document.createElement("option");
      optionElement.value = genreName;
      optionElement.innerText = genreName;
      container.append(optionElement);
    }
  }
}
