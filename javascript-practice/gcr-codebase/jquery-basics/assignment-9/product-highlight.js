$(function () {
  $(".product").on("click", function () {
    $(this).toggleClass("highlight");
  });

  // Hover reveals details without permanently changing the layout.
  $(".product").hover(
    function () { $(this).find(".details").slideDown(); },
    function () { $(this).find(".details").slideUp(); }
  );

  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected").text($(this).hasClass("selected") ? "♥" : "♡");
  });

  $(".product[discount='true']").css("background", "#fff7f5");

  $(".product").on("click", function () {
    if ($(this).data("stock") === "out") {
      alert(`${$(this).find("h2").text()} is out of stock`);
    }
  });
});
