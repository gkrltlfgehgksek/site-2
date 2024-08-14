//ScrollGiveClass 플러그인 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline:100
});

//swiper 플러그인 호출
const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    wrapperClass:'slider',
    slideClass:'view',
    autoplay: { //자동슬라이드
      delay: 5000, //하나의 슬라이드를 보여주는 시간
    },
    speed:800, //슬라이드가 전환되는 시간
    spaceBetween:10, //슬라이드 사이간격
    // If we need pagination
    pagination: { 
      el: '.pager', //버튼영역 대상
      bulletActiveClass:'active', //활성화된 요소에 추가되는 클래스
      clickable:true, //클릭시 슬라이드 이동
    },
         
  });
  //press영역 스와이퍼 호출
  const swiper2 = new Swiper("#press .inner", {
    wrapperClass:'slider',
    slideClass:'item',
    slidesPerView: 5,
    spaceBetween:30,
    pagination:{
      el:'.dot',
      bulletActiveClass:'active',
      clickable:true,
    }
  });

  swiper2.slidesPerView = 4;