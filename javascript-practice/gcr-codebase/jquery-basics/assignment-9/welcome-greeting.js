$(function () {
  const hour = new Date().getHours();
  const period = hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";

  // Personalize the greeting when the page loads.
  $("#greeting").text(`Good ${period}!`);

  $("#changeGreeting").on("click", function () {
    $("#greeting").text("Success begins with the courage to start!");
  });

  $("#toggleWelcome").on("click", function () {
    $("#welcome").toggle();
  });

  $("#greeting").on("click", function () {
    alert($(this).text());
  });
});
