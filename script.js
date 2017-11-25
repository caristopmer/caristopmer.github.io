$(document).ready(function() {

  let navHeight = 240;

  $('#home').on('click', function() {
    $('html, body').animate({
        scrollTop: $(".home").offset().top - navHeight
    }, 1000);
  });

  $('#projects').on('click', function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top - navHeight
    }, 1000);
  });

  $('#background').on('click', function() {
    $('html, body').animate({
        scrollTop: $(".background").offset().top - navHeight
    }, 1000);
  });

  $('#contact').on('click', function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - navHeight
    }, 1000);
  });

});