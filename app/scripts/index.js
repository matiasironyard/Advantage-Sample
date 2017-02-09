var reviews = require('../scripts/reviews.js').reviews;
var Handlebars = require('Handlebars');

$(document).ready(function(){
    Materialize.fadeInImage('body');
    $('.scrollspy').scrollSpy();
     $('.parallax').parallax();
     $('.modal').modal();
     $('.slider').slider({indicators: false, height: 500, transition: 800});
     $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
        }
      );
      var options = [
        {selector: '#about-book', offset: 20, callback: function() {
          // $('#about-book').removeClass('hidden');
          Materialize.fadeInImage('#about-book');
        } },
      ];
      Materialize.scrollFire(options);
   });

//###########VIDEO############//
 $(document).ready(function(){
   $('.fa-angle-down').click(function(){
     $('#come-look').fadeOut(400);
     $('#video').fadeIn(2000);
   });
 });

//######## PROJECTS HANDLEBARS ##########//
var source = $("#reviewsTemplate").html();
var template = Handlebars.compile(source);
$('#reviewsContainer').html(template(reviews));


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
