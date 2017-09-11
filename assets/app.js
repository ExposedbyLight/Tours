$(init);

function init() {
  $(".main-gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".nav-gallery"
  });

  $(".nav-gallery").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".main-gallery"
  });
};
