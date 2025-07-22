/* Drawer */
jQuery(".c-drawer-btn").on("click", function () {
  jQuery(".c-drawer-btn").toggleClass("open");
  $('.l-header-sp__menu').toggleClass('open');
});

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-to-top-button").show();
  } else {
    jQuery("#js-to-top-button").hide();
  }
});

/* Smooth Scroll */
jQuery('a[href^="#"]').click(function () {
  var header = 0;
  var speed = 300;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id);
  var position = jQuery(target).offset().top - header;
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("body").addClass("is-footer-sns-fixed");
  } else {
    jQuery("body").removeClass("is-footer-sns-fixed");
  }
});

const scrollElement = document.querySelector("#horizontal-scroll");

scrollElement.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

  const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

  if (
    (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
    (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
  )
    return;

  e.preventDefault();
  scrollElement.scrollLeft += e.deltaY;
});

