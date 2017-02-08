var reviews = require('../scripts/reviews.js').reviews;
var Handlebars = require('Handlebars');

$(document).ready(function(){
     $('.parallax').parallax();
     $('.modal').modal();
     $('.slider').slider({indicators: false, height: 500, transition: 800});
   });

//######## PROJECTS HANDLEBARS ##########//
var source = $("#reviewsTemplate").html();
var template = Handlebars.compile(source);
$('#reviewsContainer').html(template(reviews));
