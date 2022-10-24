import Swiper, { Pagination } from 'swiper';

const sliders = document.querySelectorAll('.swiper-container');

const media = window.matchMedia('(max-width: 767.98px)');
let sliderMobile;

for (let i = 0; i < sliders.length; i++) {
  sliderMobile = sliders[i];
  createSlider(sliderMobile);
}


function createSlider(slider) {
  if (media.matches && !slider.classList.contains('swiper-initialized')) {
    let newSlider = new Swiper(slider, {

      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
      speed: 500,
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}