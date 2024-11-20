export function fetchAllCategories(all_categories){
  const excludedCategories = ["Mystery", "Comedy", "Sport"];

  for(let i = 0; i < all_categories.length; i++) {
    const category = all_categories[i]["name"]
    const container = document.getElementById("categories")
    const option = document.createElement("option")

      if(!excludedCategories.includes(category)) {
        option.value = category
        option.innerText = category
        container.append(option)
      }
  }
}