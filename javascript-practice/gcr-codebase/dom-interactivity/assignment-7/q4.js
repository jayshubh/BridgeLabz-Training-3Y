const themeClasses = ["theme-light", "theme-dark", "theme-blue"];
const allowedThemes = new Set(["light", "dark", "blue"]);

document.body.addEventListener("click", (event) => {
  const button = event.target.closest("[data-theme-choice]");
  if (!button) return;
  const theme = button.getAttribute("data-theme-choice");
  if (!allowedThemes.has(theme)) return;
  document.body.setAttribute(
    "class",
    [...document.body.classList].filter((className) => !themeClasses.includes(className))
      .concat(`theme-${theme}`).join(" ")
  );
  document.body.setAttribute("data-theme", theme);
});
