// horizontascroll 横スクロール
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

/* Drawer */
jQuery(".drawer-btn").on("click", function () {
  jQuery(".drawer-btn").toggleClass("open");
  $('.header-sp__menu').toggleClass('open');
});

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-to-tobutton").show();
  } else {
    jQuery("#js-to-tobutton").hide();
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


// usageの横スクロール
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});






