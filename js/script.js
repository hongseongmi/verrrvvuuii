$(document).ready(function(){
  // aos cdn
  AOS.init();
  
  // sec-1 swiper
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      autoplay:true,
      speed:800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        loop:true,
        loopedSlides: 1,
      },
    });

    
    // 모바일 헤더 스크롤 이벤트
    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      console.log(sct);
      
    // scroll top 값이 400 이상일때 on추가, 이하일때 on 제거
    
    if (sct >= 400) {
      $('.mobile-header-wrap').addClass('on');
    }
    else{
      $('.mobile-header-wrap').removeClass('on');

    }
  });


    // 모바일 헤더 menu버튼 클릭
    $('.mobileHeaderMenu').click(function(){
      $('.header').toggleClass('active');
      $('.mobileHeaderMenu svg').toggleClass('active');
      $('.mobile-header-wrap').removeClass('on');

    });


    // sec-5 swiper

    var swiper = new Swiper(".secSwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay:true,
      loop:true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
});