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

//######## PROJECTS HANDLEBARS ##########//
var source = $("#reviewsTemplate").html();
var template = Handlebars.compile(source);
$('#reviewsContainer').html(template(reviews));
