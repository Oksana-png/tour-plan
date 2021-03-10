const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // autoplay: {
  //   delay: 6000,
  // },
  
});

const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  }
});
// addEventListener('keydown', function (event) {
//   console.log(event)
//   if(event.key === 'ArrowRight'){
//     swiper.slideNext();
//   }
//   else if (event.key === 'ArrowLeft'){
//     swiper.slidePrev()
//   }
// });