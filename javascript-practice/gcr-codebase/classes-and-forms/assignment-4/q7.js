const loginForm = document.querySelector("#login-form");
const loginResult = document.querySelector("#login-result");
const loginRules = {
  username: /^.{5,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const messages = {
    username: "Username must be at least 5 characters.",
    password: "Password needs 8+ characters, uppercase, lowercase, a number, and a special character.",
  };
  let valid = true;
  for (const field of Object.keys(loginRules)) {
    const input = loginForm.elements[field];
    const matches = loginRules[field].test(input.value);
    const message = matches ? "" : messages[field];
    loginForm.querySelector(`[data-error="${field}"]`).textContent = message;
    if (!matches) valid = false;
  }
  loginResult.textContent = valid ? "Login details are valid." : "Please correct the errors above.";
});
