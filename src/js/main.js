'use strict';

var slider = document.querySelector('.slider');
var sliderButtons = slider.querySelectorAll('.slider__toggle');
var sliderItems = slider.querySelectorAll('.slider__item');
var popup = document.querySelector('.modal');
var popupClose = popup.querySelector('.modal__close');
var overlay = document.querySelector('.overlay');
var actions = document.querySelectorAll('.action');

function removeActiveClass () {
  var activeSlide = slider.querySelector('.slider__item--active');
  var activeButton = slider.querySelector('.slider__toggle--active');

  activeSlide.classList.remove('slider__item--active');
  activeButton.classList.remove('slider__toggle--active');
}

for (var i = 0; i < sliderButtons.length; i++) {
  (function (i) {
    var button = sliderButtons[i];
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeActiveClass();
      sliderItems[i].classList.add('slider__item--active');
      button.classList.add('slider__toggle--active');
    });

    button.addEventListener('focus', function (evt) {
      evt.preventDefault();
      removeActiveClass();
      sliderItems[i].classList.add('slider__item--active');
      button.classList.add('slider__toggle--active');
    });
  })(i);
}

for (var i = 0; i < actions.length; i++) {
  (function (i) {
    var button = actions[i];
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      overlay.classList.add('overlay--show');
      popup.classList.add('modal--show');
    })
  })(i)
}

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal--show')) {
      evt.preventDefault();
      popup.classList.remove('modal--show');
      overlay.classList.remove('overlay--show');
    }
  }
});
