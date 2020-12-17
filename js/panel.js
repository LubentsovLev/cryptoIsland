$(function () {});

let burger = document.querySelector('.burger__burger');
let nav = document.querySelector('.panel__main-menu');

let popup__wallet = document.querySelector('.popup__wallet');
burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('nav_active');
  document.body.classList.toggle('dis');
});

function toggleOwerflow(style) {
  document.body.style.overflow = style;
}
function closePop(popup) {
  popup.classList.remove('popup__active');
}

// burger.addEventListener('click', function () {
//   this.classList.toggle('burger_active');
//   nav.classList.toggle('nav_active');
// });

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('open_popup-wallet')) {
    closePop(popup__wallet);
    popup__wallet.classList.add('popup__active');
    toggleOwerflow('hidden');
  }
  if (
    e.target.classList.contains('popup__x') ||
    e.target.classList.contains('popup')
  ) {
    popup__wallet.classList.remove('popup__active');
    toggleOwerflow('visible');
  }
});
