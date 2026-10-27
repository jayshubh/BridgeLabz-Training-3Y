const productForm = document.querySelector("#product-form");
const productInput = document.querySelector("#product-name");
const productList = document.querySelector("#products");
let editingItem = null;

function saveEdit(item = editingItem) {
  if (!item) return;
  const input = item.querySelector("input");
  if (input) input.replaceWith(document.createTextNode(input.value.trim() || "Untitled product"));
  editingItem = null;
}

function beginEdit(item) {
  if (editingItem && editingItem !== item) saveEdit();
  if (item.querySelector("input")) return;
  const currentName = item.firstChild.textContent;
  const input = document.createElement("input");
  input.value = currentName;
  item.firstChild.textContent = "";
  item.insertBefore(input, item.firstChild);
  editingItem = item;
  input.focus();
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveEdit(item);
    if (event.key === "Escape") {
      input.value = currentName;
      saveEdit(item);
    }
  });
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = productInput.value.trim();
  if (!name) return;
  const item = document.createElement("li");
  item.append(document.createTextNode(name));
  for (const [action, label] of [["edit", "Edit"], ["delete", "Delete"]]) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.action = action;
    button.textContent = label;
    item.append(" ", button);
  }
  productList.append(item);
  productInput.value = "";
});

productList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const item = button.closest("li");
  if (button.dataset.action === "delete") {
    if (editingItem === item) editingItem = null;
    item.remove();
  } else {
    beginEdit(item);
  }
});

document.addEventListener("click", (event) => {
  if (editingItem && !editingItem.contains(event.target)) saveEdit();
});
