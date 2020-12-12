$(function () {
  $('.up__items').slick({
    infinite: false,
    slidesToShow: 3.3,
    slidesToScroll: 0.6,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 0.7,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  if (document.documentElement.clientWidth < 1160) {
    $('.make__items').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 2.6,
            slidesToScroll: 0.7,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('.growth__items').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: 'unslick',
        },
      ],
    });
  }
});

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
  this.classList.toggle('burger_active');
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
    burger.classList.remove('burger_active');
    nav.classList.remove('nav_active');
    popup__auth.classList.add('popup__active');
    toggleOwerflow('hidden');
  }
});

document.addEventListener('click', function (e) {
  let all = document.querySelectorAll('.docs__item');
  let allPl = document.querySelectorAll('.docs-pl');

  if (e.target.classList.contains('docs-pl')) {
    for (let i = 0; i < all.length; i++) {
      all[i].classList.remove('docs__active');
      allPl[i].innerHTML = '+';
    }
    if (e.target.innerHTML === '+') {
      e.target.parentElement.parentElement.classList.add('docs__active');
    } else {
      e.target.parentElement.parentElement.classList.remove('docs__active');
    }
    e.target.innerHTML = e.target.innerHTML === '+' ? '-' : '+';
  }
});
