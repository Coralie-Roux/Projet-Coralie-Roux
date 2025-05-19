const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: false,
  loopAdditionalSlides: 1,
  initialSlide: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  simulateTouch: window.innerWidth < 1280,
  allowTouchMove: window.innerWidth < 1280,
});

window.addEventListener('resize', () => {
  swiper.params.simulateTouch = window.innerWidth < 1280;
  swiper.params.allowTouchMove = window.innerWidth < 1280;
  swiper.update();
});

swiper.slides.forEach((slide, index) => {
  slide.addEventListener('click', () => swiper.slideTo(index));
});