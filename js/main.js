const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  autoplay: {
    delay: 6000,
  },
  
});

addEventListener('keydown', function (event) {
  console.log(event)
  if(event.key === 'ArrowRight'){
    swiper.slideNext();
  }
  else if (event.key === 'ArrowLeft'){
    swiper.slidePrev()
  }
});