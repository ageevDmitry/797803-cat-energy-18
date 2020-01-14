"use strict ";

(function () {

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.header__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }

    if (navToggle.classList.contains('header__toggle')) {
      navToggle.classList.remove('header__toggle');
      navToggle.classList.add('header__toggle--opened');
    } else {
      navToggle.classList.add('header__toggle');
      navToggle.classList.remove('header__toggle--opened');
    }
  });

})();
