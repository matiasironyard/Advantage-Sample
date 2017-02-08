var reviews = require('../scripts/reviews.js').reviews;
var Handlebars = require('Handlebars');

$(document).ready(function(){
     $('.parallax').parallax();
   });

//######## PROJECTS HANDLEBARS ##########//
var source = $("#reviewsTemplate").html();
var template = Handlebars.compile(source);
$('#reviewsContainer').html(template(reviews));

$(document).ready(function(){
   $('.modal').modal();
   console.log(this);
 });
