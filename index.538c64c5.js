$(".site-nav__item a").click((function(){return $(".active").removeClass("active"),$(this).addClass("active"),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top-0},500),!1}));
//# sourceMappingURL=index.538c64c5.js.map
