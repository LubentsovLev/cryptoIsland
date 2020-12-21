$(function () {
  $('.panel__ln-copy').on('click', function () {
    var code = document.querySelector('.panel__ln-text'); // #text - блок из которого нужно скопировать
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().addRange(range);
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'удачно' : 'неудачно';
      // alert('Код скопирован ' + msg);
    } catch (err) {
      // alert('Код не скопирован автоматически :с' + '\n' + 'Попробуйте вручную');
    }
    window.getSelection().removeAllRanges();
  });
});

let burger = document.querySelector('.burger__burger');
let nav = document.querySelector('.panel__main-menu');

let popup__wallet = document.querySelector('.popup__wallet');
let popup__checkout = document.querySelector('.popup__checkout');
let popup__help = document.querySelector('.popup__help');
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
  if (e.target.classList.contains('open_popup__checkout')) {
    closePop(popup__checkout);
    popup__checkout.classList.add('popup__active');
    toggleOwerflow('hidden');
  }
  if (e.target.classList.contains('open_popup__help')) {
    closePop(popup__help);
    popup__help.classList.add('popup__active');
    toggleOwerflow('hidden');
  }
  if (
    e.target.classList.contains('popup__x') ||
    e.target.classList.contains('popup') ||
    e.target.classList.contains('btn_err')
  ) {
    popup__wallet.classList.remove('popup__active');
    popup__checkout.classList.remove('popup__active');
    popup__help.classList.remove('popup__active');

    toggleOwerflow('visible');
  }
});
