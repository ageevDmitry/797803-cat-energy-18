"use strict ";

(function () {

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }

    if (navToggle.classList.contains('toggle--closed')) {
      navToggle.classList.remove('toggle--closed');
      navToggle.classList.add('toggle--opened');
    } else {
      navToggle.classList.add('toggle--closed');
      navToggle.classList.remove('toggle--opened');
    }
  });

})();
