const user = { name: "John", email: "john@mail.com", age: 21 };
const profileForm = document.querySelector("#profile-form");
const profileOutput = document.querySelector("#profile-output");

function renderProfile() {
  profileOutput.textContent = JSON.stringify(user, null, 2);
}

for (const [key, value] of Object.entries(user)) {
  profileForm.elements[key].value = value;
}

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  user.name = profileForm.elements.name.value.trim();
  user.email = profileForm.elements.email.value.trim();
  user.age = Number(profileForm.elements.age.value);
  renderProfile();
});

renderProfile();
