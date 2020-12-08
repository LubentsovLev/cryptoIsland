$(function () {});

let burger = document.querySelector('.burger__burger');
let nav = document.querySelector('.firstMain__header-items');

let popup__reg = document.querySelector('.popup__reg');
let popup__auth = document.querySelector('.popup__auth');

function toggleOwerflow(style) {
  document.body.style.overflow = style;
}
function closePop(popup) {
  popup.classList.remove('popup__active');
}

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('nav_active');
});
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('open_popup-reg')) {
    closePop(popup__auth);
    popup__reg.classList.add('popup__active');
    toggleOwerflow('hidden');
  }
  if (
    e.target.classList.contains('popup__x') ||
    e.target.classList.contains('popup')
  ) {
    popup__reg.classList.remove('popup__active');
    popup__auth.classList.remove('popup__active');
    toggleOwerflow('visible');
  }
  if (e.target.classList.contains('open_popup-auth')) {
    burger.classList.remove('active');
    nav.classList.remove('nav_active');
    popup__auth.classList.add('popup__active');
    toggleOwerflow('hidden');
  }
});
