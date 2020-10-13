let menuButton = document.getElementById('menu-btn');
console.log(menuButton);
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button__active');
  document.getElementsByTagName('html')[0].classList.toggle('overfl');
  if (menuButton.className.includes('menu-button__active')) {
    document.getElementById('mobile-menu').style.display = 'block';

  } else document.getElementById('mobile-menu').style.display = 'none';
});
window.addEventListener('click', () => {
  let target = event.target;
  if (target.id === 'mobile-menu') {
    document.getElementById('mobile-menu').style.display = 'none';
    menuButton.classList.remove('menu-button__active');
  }
});


if (document.body.clientWidth >770) {
  $('.slider-wrp_diner').slick({
    // slidesToShow: 4,
    prevArrow: '.slider-one-prev',
    nextArrow: '.slider-one-next'
  });
  $('.slider-wrp_menu').slick({
    // slidesToShow: 4,
    prevArrow: '.slider-two-prev',
    nextArrow: '.slider-two-next'
  });
}
