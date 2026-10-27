const wizard = document.querySelector("#wizard");
const fields = [...wizard.querySelectorAll("[data-step]")];
const backButton = document.querySelector("#back");
const nextButton = document.querySelector("#next");
const finishButton = document.querySelector("#finish");
const summary = document.querySelector("#summary");
let activeStep = 0;

function showStep() {
  fields.forEach((field, index) => { field.hidden = index !== activeStep; });
  backButton.disabled = activeStep === 0;
  nextButton.hidden = activeStep === fields.length - 1;
  finishButton.hidden = activeStep !== fields.length - 1;
}

nextButton.addEventListener("click", () => {
  const input = fields[activeStep].querySelector("input");
  if (!input.reportValidity()) return;
  activeStep += 1;
  showStep();
});
backButton.addEventListener("click", () => {
  activeStep = Math.max(0, activeStep - 1);
  showStep();
});
wizard.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(wizard).entries());
  summary.textContent = `Name: ${data.name}; Email: ${data.email}; Password: ${"*".repeat(data.password.length)}`;
  summary.hidden = false;
  wizard.hidden = true;
});
showStep();
