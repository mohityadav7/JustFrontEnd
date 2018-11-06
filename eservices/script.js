$(document).ready(function(){
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $('.go-to-top').on('click', function(e){
      e.preventDefault();
      var offset = $('.top').offset().top;
      $("html, body").animate({
          scrollTop: offset
      }, 700);
  });
});


// Add smooth scrolling to all links in navbar + footer link
$(".navbar a, section .single-customer-content a").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900);
  } // End if
});

// auto collapse navbar dropdown on clicking on links
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
