const messageBox = document.querySelector("#message");
const remainingLabel = document.querySelector("#remaining");
const characterLimit = 100;

function updateCounter() {
  const remaining = characterLimit - messageBox.value.length;
  remainingLabel.textContent = `${remaining} characters remaining`;
  remainingLabel.style.color = remaining === 0 ? "red" : remaining <= 20 ? "orange" : "inherit";
}

messageBox.addEventListener("beforeinput", (event) => {
  const addsText = event.inputType.startsWith("insert") && event.data !== null;
  const selectedLength = messageBox.value.slice(messageBox.selectionStart, messageBox.selectionEnd).length;
  if (addsText && messageBox.value.length - selectedLength + event.data.length > characterLimit) {
    event.preventDefault();
  }
});
messageBox.addEventListener("input", updateCounter);
document.querySelector("#reset").addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
});
updateCounter();
