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

    modalOverlay.on('click', closeModal);

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

  $('.modal__form').validate({
      errorClass: "invalid-modal",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "At least 2 letters",
        },
        emailModal: {
          required: "Your email address",
          email: "Format: name@domain.ru"
        },
        phoneModal: {
          required: "Telephone required",
          minlength: "At least 18 letters",
        },
      }
    });

  $('.form-newsletter').validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "Your email address",
          email: "Format: name@domain.ru"
        },
      }
    });

  $('.footer__form').validate({
      errorClass: "invalid-footer",
      messages: {
        phone: {
          required: "Telephone required",
          minlength: "At least 18 letters",
        },
        name: {
          required: "Please specify your name",
          minlength: "At least 2 letters",
        },
      }
  });

  $('.modal__input_tel').mask('+0 (000) 000-00-00');
  $('.footer__input_tel').mask('+0 (000) 000-00-00');

  AOS.init({
    disable: 'mobile',
  });

  // Встраивание карты при наведении
  const map = document.querySelector('.map-wrap');
  map.addEventListener('mouseover',  () => {
    map.insertAdjacentHTML('afterBegin', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3563.4142651943253!2d60.105170581097774!3d57.92313650542514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1615377213835!5m2!1sru!2sru" allowfullscreen="" loading="lazy" class="map"></iframe>')
  });


});

