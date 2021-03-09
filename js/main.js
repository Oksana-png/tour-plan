const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 6000,
  },
  
});

ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [57.90, 59.94],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });
    }

// addEventListener('keydown', function (event) {
//   console.log(event)
//   if(event.key === 'ArrowRight'){
//     swiper.slideNext();
//   }
//   else if (event.key === 'ArrowLeft'){
//     swiper.slidePrev()
//   }
// });