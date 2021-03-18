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
  autoplay: {
    delay: 6000,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  }
});

const buttonMenu = document.querySelector('.menu-button');

buttonMenu.addEventListener('click', () => {
  const navbarBottom = document.querySelector('.navbar-bottom');
  navbarBottom.classList.toggle('navbar-bottom--visible');

  if(navbarBottom.classList.contains('navbar-bottom--visible')) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'auto';
  }
});
