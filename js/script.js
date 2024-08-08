//ScrollGiveClass플러그인 호출

var sgc1 = new ScrollGiveClass("header",{
    baseline:'100'
});

//Swiper플러그인 호출

const swiper = new Swiper('#main_view', {
    // Optional parameters
  wrapperClass:'slider',
  slideClass:'view',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });