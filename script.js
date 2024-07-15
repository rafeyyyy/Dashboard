var swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 2000, // Delay in milliseconds between each slide
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    // debugger: true,
  });