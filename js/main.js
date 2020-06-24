(function ($) {
  "use strict";

  ///////////////////////////
  // On Scroll
  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();

    // Fixed nav
    wScroll > 1
      ? $("#nav").addClass("fixed-nav")
      : $("#nav").removeClass("fixed-nav");
  });
  ///////////////////////////
  // Кнопка navbar-collapse
  // $("#nav .navbar__collapse").on("click", function () {
  // 	$("#nav").toggleClass("open");
  // });
  $("#nav .navbar__search a").on("click", function () {
    $("#nav").toggleClass("open-search");
  });
  $(".page-collapse").on("click", function () {
    $(".page").toggleClass("open-aside");
  });

  document.addEventListener("DOMContentLoaded", () => {
    new Mmenu("#cart", {
      extensions: ["position-right"],
      navbar: {
        title: "Корзина",
      },
      // "onClick": {close : true}
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    new Mmenu("#phone", {
      extensions: ["position-right"],
      navbar: {
        title: "Контакты",
      },
      // "onClick": {close : true}
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    new Mmenu("#mob-menu", {
      extensions: ["position-right"],
      navbar: {
        title: "Меню",
      },
      // "onClick": {close : true}
    });
  });
  // slider-home
  $("#slider-cat").slick({
    dots: true,
    dotsClass: "dots dots-offset",
    prevArrow:
      '<button class="btn-arrow btn-arrow-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="btn-arrow btn-arrow-next"><i class="fa fa-angle-right"></i></button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // slider-cards
  if ($("*").is(".slider-cards")) {
    $(document).ready(function () {
      let sliders__array = $(".slider-cards");
      for (var i = 0; i < sliders__array.length; i++) {
        let id = $(sliders__array[i]).attr("id");

        $("#" + id)
          .children(".slider-cards__slides")
          .owlCarousel({
            items: 4,
            margin: 20,
            loop: true,

            nav: true,
            dots: false,
            navText: [
              '<i class="fa fa-chevron-left"></i>',
              '<i class="fa fa-chevron-right"></i>',
            ],
            navContainer: "#" + id + " .slider-cards_nav",

            responsive: {
              0: { items: 1 },
              560: { items: 2 },
              769: { items: 3 },
              1200: { items: 4 },
            },
          });
      }
    });
  }
  // slider-partners
  if ($("*").is(".slider-partners")) {
    $(document).ready(function () {
      let sliders__array = $(".slider-partners");
      for (var i = 0; i < sliders__array.length; i++) {
        let id = $(sliders__array[i]).attr("id");

        $("#" + id)
          .children(".slider-partners__slides")
          .owlCarousel({
            items: 6,
            margin: 20,
            loop: true,

            nav: true,
            dots: false,
            navText: [
              '<i class="fa fa-chevron-left"></i>',
              '<i class="fa fa-chevron-right"></i>',
            ],
            navContainer: "#" + id + " .slider-partners_nav",

            responsive: {
              0: { items: 3 },
              769: { items: 4 },
              1200: { items: 6 },
            },
          });
      }
    });
  }
  // video-gallery
  $(".video-prev").click(function () {
    $(this)
      .parents(".video-gallery")
      .find(".video-prev.active")
      .removeClass("active");
    $(this).addClass("active");
    let token = $(this).attr("data-token");
    $(this)
      .parents(".video-gallery__list")
      .find(".video-gallery__video iframe")
      .attr({ src: "https://www.youtube.com/embed/" + token });
  });
  // instagram-gallery__gallery
  if ($("*").is(".inst-slider")) {
    $(document).ready(function () {
      $(".inst-slider").owlCarousel({
        // items: 2,
        // autoWidth: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 3000,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
          1170: { items: 4 },
          990: { items: 3 },
          430: { items: 2 },
          0: { items: 1 },
        },
      });
    });
  }
  $(".range-slider").slider({
    range: true,
    min: 0,
    max: 500,
    values: [0, 300],
    slide: function (event, ui) {
      $(".mileageOne").val(ui.values[0]);
      $(".mileageTwo").val(ui.values[1]);
    },
  });
  $(".mileageOne").val($(".range-slider").slider("values", 0));
  $(".mileageTwo").val($(".range-slider").slider("values", 1));

  // Init fancybox
  // =============
  var selector = ".slick-slide:not(.slick-cloned)";

  // Attach custom click event on cloned elements,
  // trigger click event on corresponding link
  $(document).on("click", ".slick-cloned", function (e) {
    $(selector)
      .eq(
        ($(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length
      )
      .trigger("click.fb-start", {
        $trigger: $(this),
      });

    return false;
  });

  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    // prevArrow:
    //   '<button type="button" class="single-gallery-prev"><i class="fa fa-chevron-left"></i></button>',
    // nextArrow:
    //   '<button type="button" class="single-gallery-next"><i class="fa fa-chevron-right"></i></button>',
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      dotsClass: "dots",

      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
		},

        // {
        //   breakpoint: 420,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   },
        // },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });
})(jQuery);
