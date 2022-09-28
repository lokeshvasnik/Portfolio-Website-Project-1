$(document).ready(() => {
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots',
  });

  let hamburger = document.querySelector('.hamburger');

  let closeBtn = document.querySelector('.times');

  let mobileNav = document.querySelector('.mobile-nav');

  const ham = () => {
    mobileNav.classList.add('open');
  };

  const close = () => {
    mobileNav.classList.remove('open');
  };
  hamburger.addEventListener('click', ham);

  closeBtn.addEventListener('click', close);
});
