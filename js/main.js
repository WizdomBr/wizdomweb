$(document).ready(() => {

  // Bootstrap Carousel
  const wzCarousel = document.querySelector('#wz-carousel');
  new bootstrap.Carousel(wzCarousel, {
    interval: 4000,
    pause: 'hover',
  });

});