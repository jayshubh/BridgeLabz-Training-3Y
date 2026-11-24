$(function () {
  $(".manager").on("click", function () {
    $(this).siblings(".employee").toggleClass("highlight");
  });

  // .next() is used because contact details immediately follow employee names.
  $(".employee").hover(
    function () { $(this).find(".contact").slideDown(); },
    function () { $(this).find(".contact").slideUp(); }
  );

  $(".department h2").on("click", function () {
    $(this).parent().children(".employee").css("background", "#d7f5df");
  });

  $(".employee").on("click", function () {
    $(this).siblings(".employee").toggleClass("highlight");
  });

  $("#randomEmployee").on("click", function () {
    $(".employee").removeClass("highlight");
    const $employees = $(".employee");
    $employees.eq(Math.floor(Math.random() * $employees.length)).siblings(".employee").addClass("highlight");
  });

  $("#toggleTeam").on("click", function () {
    $(".department").parent().find(".employee").slideToggle();
  });
});
