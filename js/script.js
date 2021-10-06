$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".trans-bg").css("background-color", "white-bg-nav");
    } else {
      $(".trans-bg").css("background-color", "white-bg-nav");
    }
  });
});
