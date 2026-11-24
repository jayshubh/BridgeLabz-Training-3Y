// jQuery 1.12 was captured before jQuery 3.7 loaded.
var jq1 = window.jq1;
var jq3 = jQuery.noConflict(true);

$(function () {
  let slideIndex = 0;
  const slides = jq1("#carousel .slide");
  setInterval(function () {
    slides.hide().eq(slideIndex).fadeIn();
    slideIndex = (slideIndex + 1) % slides.length;
  }, 3000);
  jq1("#carousel").on("click", function () {
    jq1(this).toggleClass("active");
  });
});

jq3(function () {
  jq3("#openModal").on("click", function () {
    jq3("#modal").fadeIn();
  });
  jq3("#closeModal").on("click", function () {
    jq3("#modal").fadeOut();
  });
  jq3("[title]").hover(
    function () { jq3(this).attr("data-tooltip", jq3(this).attr("title")); },
    function () { jq3(this).removeAttr("data-tooltip"); }
  );
});
