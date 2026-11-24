$(function () {
  let postNumber = 6;

  $("#addPost").on("click", function () {
    $("<article>", { class: "post", text: `New Blog Post ${postNumber++}` })
      .append($("<span>", { class: "tag", text: " #new" }))
      .appendTo("#posts");
  });

  $("#prependPost").on("click", function () {
    $("<article>", { class: "post keyword", text: "Featured Post" })
      .prepend($("<strong>", { text: "FEATURED: " }))
      .prependTo("#posts");
  });

  $("#removePost").on("click", function () {
    $("#posts .post").last().remove();
  });

  // before()/after() place tag elements around matching posts.
  $(".post").each(function () {
    $(this).before($("<span>", { class: "tag", text: "[Blog] " }));
  });
  $(".post[data-keywords*='jquery']").after($("<span>", { class: "tag", text: " [Tag: Interactive]" }));
  $(".post[data-keywords*='javascript'], .post[data-keywords*='css']").addClass("keyword");
});
