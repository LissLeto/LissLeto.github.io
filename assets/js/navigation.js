(function () {
  var menu = document.getElementById("mobile-site-menu");
  if (!menu) return;

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) menu.open = false;
  });

  menu.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target)) menu.open = false;
  });

  if (window.jQuery) {
    window.jQuery(function ($) {
      if (!$.fn.smoothScroll) return;

      $(".site-navigation a").smoothScroll({
        beforeScroll: function (options) {
          menu.open = false;
          var masthead = document.querySelector(".masthead");
          var headerHeight = masthead ? masthead.getBoundingClientRect().height : 0;
          options.offset = -headerHeight - 20;
          options.speed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400;
        }
      });
    });
  }
})();
