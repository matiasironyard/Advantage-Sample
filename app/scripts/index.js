var reviews = require('../scripts/reviews.js').reviews;
var Handlebars = require('Handlebars');
$(document).ready(function() {
  Materialize.fadeInImage('body');
  $('.parallax').parallax();
  $('.modal').modal();
  $('.slider').slider({
    indicators: false,
    height: 650,
    transition: 800
  });
  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: true,
    draggable: true,
  });
  var options = [
    {
      selector: '#about-book',
      offset: 20,
      callback: function() {
        // $('#about-book').removeClass('hidden');
        Materialize.fadeInImage('#about-book');
      }
      },
      ];
  Materialize.scrollFire(options);
});
//###########VIDEO############//
$(document).ready(function() {
  $('.fa-angle-down').click(function() {
    $('#come-look').fadeOut("fast");
    $('#video').fadeIn(2000);
  });
});
//######## PROJECTS HANDLEBARS ##########//
var source = $("#reviewsTemplate").html();
var template = Handlebars.compile(source);
$('#reviewsContainer').html(template(reviews));
//###########SCROLL###############//
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});
//######## PROJECTS HANDLEBARS ##########//
// function isInView(elem){
//    return $(elem).offset().top - $(window).scrollTop() < $(elem).height() ;
// }
// $(window).scroll(function(){
//    if (isInView($('.video-container'))){
//      $('nav').fadeOut(2000);
//    } else if (!isInView($('.video-container'))){
//      $('nav').fadeIn(2000);
//    }
// });
