$(document).ready(function() {
  let navHeight = 270;
  $("#home").addClass("active");

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

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop() + navHeight + 1;
    
    var homeTop = $(".home").offset().top;
    var projectsTop = $(".projects").offset().top;
    var backgroundTop = $(".background").offset().top;
    var contactTop = $(".contact").offset().top;

    if (scrollPos < projectsTop) {
      $("#home").addClass("active");
      $("#projects").removeClass("active");
      $("#background").removeClass("active");
      $("#contact").removeClass("active")
    } else {
      $("#home").removeClass("active");
    }

    if (scrollPos >= projectsTop && scrollPos < backgroundTop) {
      $("#home").removeClass("active");
      $("#projects").addClass("active");
      $("#background").removeClass("active");
      $("#contact").removeClass("active")
    } else {
      $("#projects").removeClass("active");
    }

    if (scrollPos >= backgroundTop && scrollPos < contactTop) {
      $("#home").removeClass("active");
      $("#projects").removeClass("active");
      $("#background").addClass("active");
      $("#contact").removeClass("active")
    } else {
      $("#background").removeClass("active");
    }

    if (scrollPos + 10 >= contactTop) {
      $("#home").removeClass("active");
      $("#projects").removeClass("active");
      $("#background").removeClass("active");
      $("#contact").addClass("active")
    } else {
      $("#contact").removeClass("active");
    }
  });

  $("#contact-form").on("submit", function() {
    event.preventDefault();
    var formData = $(this).serialize();
    console.log("in form submission");
    console.log(formData);

    $.ajax({
      url: 'https://formspree.io/chris.mcmenomy@gmail.com',
      method: "POST",
      data: formData,
      dataType: 'json'
    })
      .done(function(data, textStatus, jqXHR) {
        console.log('done');
        $(this).reset();
        $("#contact-form textarea").after("<br><span class='contact-success'>Message sent! Thanks!<span>");
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.responseJSON) {
          console.log('failed with json data');
        }
        else {
          console.log('failed with unknown data'); 
        }
      })
      .always(function(dataOrjqXHR, textStatus, jqXHRorErrorThrown) {
        console.log('always');
      });
  });

});