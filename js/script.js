// horizontascroll 横スクロール
  const scrollElement = document.querySelector("#horizontal-scroll");

  function handleScroll(e) {
    // 横スクロール処理はPCのみ（スマホ無効）
    if (window.innerWidth <= 1000) return;

    const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

    // 横スクロールが必要ない or はみ出てない場合は抜ける
    if (
      (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
      (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
    ) {
      return;
    }

    e.preventDefault();
    scrollElement.scrollLeft += e.deltaY;
  }

  // 一度削除して再登録（冗長防止）
  scrollElement.removeEventListener("wheel", handleScroll);
  scrollElement.addEventListener("wheel", handleScroll, { passive: false });

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
  $(function () {
    $('a[href^="#"]').click(function (e) {
      e.preventDefault();

      const href = $(this).attr("href");
      const $target = $(href);

      if ($target.length) {
        const $container = $('#horizontal-scroll');

        // ★ 正確な左位置を求める：ページ全体からの距離 - コンテナの開始位置 + 現在のscrollLeft
        const targetOffset = $target.offset().left;
        const containerOffset = $container.offset().left;
        const currentScroll = $container.scrollLeft();

        const scrollTo = targetOffset - containerOffset + currentScroll;

        $container.animate({
          scrollLeft: scrollTo
        }, 600, 'swing');
      }
    });
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






