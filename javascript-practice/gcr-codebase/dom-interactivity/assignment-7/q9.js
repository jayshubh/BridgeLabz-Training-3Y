const signupForm = document.querySelector("#signup");
const successMessage = document.querySelector("#success");
const validationMessages = {
  name: (value) => value.trim() ? "" : "Name is required.",
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter an email containing @ in a valid format.",
  password: (value) => value.length >= 6 ? "" : "Password must be at least 6 characters.",
};

function validateInput(input) {
  const message = validationMessages[input.name](input.value);
  signupForm.querySelector(`[data-error="${input.name}"]`).textContent = message;
  return !message;
}

signupForm.addEventListener("input", (event) => {
  if (event.target.name in validationMessages) validateInput(event.target);
  successMessage.textContent = "";
});
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const valid = [...signupForm.querySelectorAll("input")].map(validateInput).every(Boolean);
  successMessage.textContent = valid ? "Form Submitted Successfully" : "";
});
