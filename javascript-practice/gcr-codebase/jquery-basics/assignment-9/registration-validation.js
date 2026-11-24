$(function () {
  const registeredEmails = ["admin@example.com", "test@example.com", "user@example.com"];

  $("#registration").on("submit", function (event) {
    event.preventDefault();
    let valid = true;
    $("input").css("border", "");
    $("#success").text("");

    const $name = $("#name");
    const $email = $("#email");
    const $password = $("#password");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Highlight each invalid field and keep the form from submitting.
    if ($name.val().trim() === "") {
      $name.css("border", "2px solid red");
      valid = false;
    }
    if (!emailPattern.test($email.val().trim()) || registeredEmails.includes($email.val().trim().toLowerCase())) {
      $email.css("border", "2px solid red");
      valid = false;
    }
    if ($password.val().length < 8) {
      $password.css("border", "2px solid red");
      valid = false;
    }
    if (valid) $("#success").text("Registration successful!");
  });
});
