const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const expandedImage = modal.querySelector("img");

for (let index = 0; index < 6; index += 1) {
  const image = document.createElement("img");
  image.src = `https://picsum.photos/seed/gallery-${index + 1}/320/220`;
  image.alt = `Gallery photo ${index + 1}`;
  image.loading = "lazy";
  gallery.append(image);
}

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;
  expandedImage.src = event.target.src.replace("/320/220", "/960/660");
  expandedImage.alt = event.target.alt;
  modal.classList.add("open");
});
modal.addEventListener("click", () => modal.classList.remove("open"));
expandedImage.addEventListener("click", (event) => event.stopPropagation());
