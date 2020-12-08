$(function () {});

let burger = document.querySelector('.burger__burger');
let nav = document.querySelector('.panel__main-menu');

let popup__reg = document.querySelector('.popup__reg');
let popup__auth = document.querySelector('.popup__auth');
burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('nav_active');
  document.body.classList.toggle('dis');
});
