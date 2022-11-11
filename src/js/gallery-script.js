$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '1px',
  });
  $('.slick-prev').text('❯');
  $('.slick-next').text('❯');
});
