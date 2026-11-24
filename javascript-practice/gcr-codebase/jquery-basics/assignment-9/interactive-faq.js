$(function () {
  $(".question").on("click", function () {
    $(this).next(".answer").slideToggle();
  });

  $(".question").hover(
    function () { $(this).css("color", "#0b63ce"); },
    function () { $(this).css("color", ""); }
  );

  // Double-click provides a quick way to close every FAQ answer.
  $(".question").on("dblclick", function () {
    $(".answer").slideUp();
  });

  $(".answer input").on("focus", function () {
    $(this).closest(".answer").prev(".question").addClass("active-question");
  }).on("blur", function () {
    $(this).closest(".answer").prev(".question").removeClass("active-question");
  });
});
