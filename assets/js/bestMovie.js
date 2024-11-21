export function bestMovie(title_text, description_text, image_src) {
  const container = document.querySelector("#best-movie div");
  const left = document.createElement("div");
  const right = document.createElement("div");
  right.classList.add("right");

  // Movie title
  const title = document.createElement("h2");
  title.innerText = title_text;

  // Movie description
  const description = document.createElement("p");
  description.innerText = description_text;

  // Movie image
  const image = document.createElement("img");
  image.src = image_src;
  image.alt = `${title_text} image`;

  // Details button
  const btn_div = document.createElement("div");
  btn_div.classList.add("button");
  const button = document.createElement("button");
  button.innerText = "Détails";
  button.classList.add("open-modal");
  btn_div.appendChild(button);

  left.append(image);
  right.append(title, description, btn_div);
  container.append(left, right);
}
