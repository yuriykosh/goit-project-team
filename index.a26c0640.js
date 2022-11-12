$(".anchor a").click((function(){return $(".active").removeClass("active"),$(this).addClass("active"),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top-0},500),!1}));
//# sourceMappingURL=index.a26c0640.js.map
