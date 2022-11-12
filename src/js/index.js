function scrollNav() {
  $('.site-nav__item a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 0
    }, 500);
    return false;
  });
}
scrollNav();
