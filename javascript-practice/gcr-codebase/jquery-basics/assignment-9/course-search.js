$(function () {
  $("#search").on("keyup", function () {
    const query = $(this).val().trim().toLowerCase();
    let matches = 0;

    $(".course").each(function () {
      const text = $(this).text();
      $(this).css("background", "");
      if (query === "" || text.toLowerCase().includes(query)) {
        $(this).show();
        matches++;
        if (query !== "") $(this).css("background", "#fff3b0");
      } else {
        $(this).hide();
      }
    });
    $("#count").text(`${matches} course${matches === 1 ? "" : "s"} found`);
  });

  $("#search").on("search", function () {
    if (!$(this).val()) {
      $(".course").show().css("background", "");
      $("#count").text("5 courses found");
    }
  });
});
