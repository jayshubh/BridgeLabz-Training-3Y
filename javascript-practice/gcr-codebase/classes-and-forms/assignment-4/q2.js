const form = document.querySelector("#student-form");
const rules = {
  name: [/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/, "Use letters, spaces, apostrophes, or hyphens only."],
  email: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."],
  phone: [/^\d{10}$/, "Phone must contain exactly 10 digits."],
  password: [/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, "Include an uppercase letter, a number, and a special character."],
};

function validateField(field) {
  const [pattern, message] = rules[field.name];
  const valid = pattern.test(field.value.trim());
  field.style.border = `2px solid ${valid ? "green" : "red"}`;
  const error = form.querySelector(`[data-error="${field.name}"]`);
  error.textContent = valid ? "" : message;
  error.style.color = "red";
  return valid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const valid = [...form.querySelectorAll("input")].map(validateField).every(Boolean);
  if (valid) alert("Student details are valid.");
});
