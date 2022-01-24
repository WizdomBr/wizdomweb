$(document).ready(() => {

  let navbar = document.querySelector('.wz-navbar-nav');
  for (let nav of navbar.getElementsByClassName('nav-link')) {
    let href = nav.getAttribute('href');
    let anchor = $(href).offset();
    window.scrollTo(anchor);
  }

  // Bootstrap Carousel
  const wzCarousel = document.querySelector('#wz-carousel');
  new bootstrap.Carousel(wzCarousel, {
    interval: 4000,
    pause: 'hover',
  });

});