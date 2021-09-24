!(function ($) {
  "use strict";
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader").delay(100).fadeOut("slow", function () {
        $(this).remove();
      });
    }
  });
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");
      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });
    $(".venobox").venobox({
      share: false,
    });
    aos_init();
  });
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);
VanillaTilt.init(document.querySelector(".card1"), {
  max: 15,
  speed: 200,
  glare: true,
  "max-glare": 1,
});
VanillaTilt.init(document.querySelector(".card2"), {
  max: 15,
  speed: 200,
  glare: true,
  "max-glare": 1,
});
VanillaTilt.init(document.querySelector(".card3"), {
  max: 15,
  speed: 200,
  glare: true,
  "max-glare": 1,
});
VanillaTilt.init(document.querySelector(".card4"), {
  max: 15,
  speed: 200,
  glare: true,
  "max-glare": 1,
});
var nav_sections = $("section");
var main_nav = $(".navbar, #mobile-nav");
$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop() + 300;
  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
      }
      main_nav.find('a[href="#' + $(this).attr("id") + '"]').parent("li").addClass("active");
    }
    if (cur_pos < 200) {
      $(".navbar ul:first li:first").addClass("active");
    }
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({
    scrollTop: 0,
  }, 1500, "easeInOutExpo");
  return false;
});
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000,
});

function aos_init() {
  AOS.init({
    duration: 1000,
    once: true,
  });
}
$(document).ready(function () {
  let scroll_link = $('.scroll');
  scroll_link.click(function (e) {
    e.preventDefault();
    let url = $('body').find($(this).attr('href')).offset().top;
    $('html, body').animate({
      scrollTop: url
    }, 700);
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    return false;
  });
});
var message = "";

function clickIE() {
  if (document.all) {
    (message);
    return false;
  }
}

function clickNS(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      (message);
      return false;
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS;
} else {
  document.onmouseup = clickNS;
  document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false")