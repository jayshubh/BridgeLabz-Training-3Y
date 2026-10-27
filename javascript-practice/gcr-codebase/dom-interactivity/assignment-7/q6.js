const searchBox = document.querySelector("#search");
const studentRows = [...document.querySelectorAll("#students tr")];
const emptyState = document.querySelector("#empty-state");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.trim().toLocaleLowerCase();
  let visibleRows = 0;
  for (const row of studentRows) {
    const matches = row.textContent.toLocaleLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) visibleRows += 1;
  }
  emptyState.hidden = visibleRows !== 0;
});
