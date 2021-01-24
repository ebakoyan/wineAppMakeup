$(document).on('click', '.burger-menu',function(){
    $('.nav-mobile').addClass('show');
})
$(document).on('click', '.close',function(){
    $('.nav-mobile').removeClass('show');
})
$(document).on('click', '.play',function(){
  $('.video-player').addClass('show');
})
$(document).on('click', '.video-player-close',function(){
  $('.video-player').removeClass('show');
})
var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
