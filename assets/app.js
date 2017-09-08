$(init);

function init() {
  $('.main-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.nav-gallery'
  });

  $('.nav-gallery').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-gallery',
    focusOnSelect: true,
    arrows: false
  });
};
