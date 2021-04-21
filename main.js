$(function(){
  sw=true
  $('.logo_right').click(function(){

    if(sw==true){
      $('.logo_right').addClass('on');
      $('.m_gnb').stop().animate({'right':0},500);
      // $('.m_gnb').css({'overflow-y':'hidden'})
      // $('.m_gnb').bind('touchmove', function(e){e.preventDefault()})
      sw=false;
    }else{
     $('.logo_right').removeClass('on');
      sw=true;
      $('.m_gnb').stop().animate({'right':'-100%'},500);
    }
  });
     


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1000,
    autoplay:{delay:3000},
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });

});
