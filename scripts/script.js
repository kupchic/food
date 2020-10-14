let menuButton = document.getElementById('menu-btn');
console.log(menuButton);
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button__active');
  document.getElementsByTagName('html')[0].classList.toggle('overfl');
  if (menuButton.className.includes('menu-button__active')) {
    document.getElementById('mobile-menu').style.display = 'block';
    window.addEventListener('click', () => {
      let target = event.target;
      if (target.id === 'mobile-menu') {
        document.getElementById('mobile-menu').style.display = 'none';
        menuButton.classList.remove('menu-button__active');
        document.getElementsByTagName('html')[0].classList.remove('overfl');
      }
    });
  } else document.getElementById('mobile-menu').style.display = 'none';
});



$('.review-slider').slick({
  slidesToShow: 1,
  prevArrow: '.prev-btn',
  nextArrow: '.next-btn',
});


$('.slider-wrp_diner').slick({
  slidesToShow: 4,
  prevArrow: '.slider-one-prev',
  nextArrow: '.slider-one-next',
  responsive: [{
    breakpoint: 1170,
    settings: "unslick"
  }]
});
$('.slider-wrp_menu').slick({
  slidesToShow: 4,
  prevArrow: '.slider-two-prev',
  nextArrow: '.slider-two-next',
  responsive: [{
    breakpoint: 1170,
    settings: "unslick"
  }]
});