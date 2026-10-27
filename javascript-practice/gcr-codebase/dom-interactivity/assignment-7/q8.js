const dropdown = document.querySelector("#dropdown");
const toggle = document.querySelector("#dropdown-toggle");
const options = document.querySelector("#dropdown-options");

toggle.addEventListener("click", () => {
  options.hidden = !options.hidden;
  toggle.setAttribute("aria-expanded", String(!options.hidden));
});
options.addEventListener("click", (event) => {
  const option = event.target.closest("button");
  if (!option) return;
  toggle.textContent = option.textContent;
  options.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
});
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    options.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
}, true);
