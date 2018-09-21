$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $(".navbar-dark").css("background" , "rgba(122, 0, 173, 0.85)");
  }

  else{
    $(".navbar-dark").css("background" , "rgba(180, 0, 255, 0.85)");  	
  }
})



function scrollHome() {
    $('html, body').animate({scrollTop: $('#showacase').offset().top - 0}, 700);
}
function scrollServices() {
    $('html, body').animate({scrollTop: $('#services').offset().top - 150}, 700);
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})