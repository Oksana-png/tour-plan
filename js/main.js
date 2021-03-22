$(document).ready(function() {
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
  
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");

    $("body").keydown(function (event) { 
      if(event.which == 27) {
        closeModal(event);
      }
	});

    if(modalDialog.hasClass('modal__dialog--visible')) {
      $('body').css('overflow', 'hidden');
    }

  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");

    $('body').css('overflow', 'auto');
  };

  $('.form').each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "At least 2 letters"
        },
        email: {
          required: "We need your email address",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Telephone required",
        },
      }
    });
  });

  $('.modal__input_tel').mask('+0 (000) 000-00-00');
  $('.footer__input_tel').mask('+0 (000) 000-00-00');
  
});

