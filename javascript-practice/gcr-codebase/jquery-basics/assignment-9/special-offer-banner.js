$(function () {
  $("#hide").on("click", function () { $(".banner").first().hide(); });
  $("#show").on("click", function () { $(".banner").show(); });
  $("#slideUp").on("click", function () { $(".banner").slideUp(); });
  $("#slideDown").on("click", function () { $(".banner").slideDown(); });
  $("#fadeOut").on("click", function () { $(".banner").fadeOut(); });
  $("#fadeIn").on("click", function () { $(".banner").fadeIn(); });

  // Rotate one banner every five seconds.
  let index = 0;
  setInterval(function () {
    const $banners = $(".banner");
    $banners.eq(index).fadeOut(400);
    index = (index + 1) % $banners.length;
    $banners.eq(index).fadeIn(400);
  }, 5000);
});
