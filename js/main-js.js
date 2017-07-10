var html = document.querySelector('.no-js');

html.classList.remove('no-js');

$(function (){
  $('.question__btn').click(function(){
    $('.question__btn').removeClass('question__btn--opened');
    $(this).addClass('question__btn--opened');
    $('.question__text').removeClass('question__text--visually');
    $(this).siblings('p').addClass('question__text--visually');
  });


  $('.burger').click(function(){
    $(this).toggleClass('burger--close').toggleClass('burger--open');
    $('.main-menu').toggleClass('displayDisplay');
  });
});

// 'use strict';

// var questionBtn = document.querySelectorAll('.question__btn');
// var questionText = document.querySelectorAll('.question__text');
// var burger = document.querySelector('.burger');
// var mainMenu = document.querySelector('.main-menu');
// var html = document.querySelector('.no-js');

// html.classList.remove('no-js');


// function question() {
//   function questionTextClose() {
//     questionText.classList.remove('question__text--visually');
//     questionText.classList.add('question__text--hidden');
//   }

//   function questionTextOpen() {
//     questionText.classList.remove('question__text--hidden');
//     questionText.classList.add('question__text--visually');
//   }

//   function questionBtnOpen() {
//     questionBtn.classList.remove('question__btn--closed');
//     questionBtn.classList.add('question__btn--opened');
//   }

//   function questionBtnClose() {
//     questionBtn.classList.remove('question__btn--opened');
//     questionBtn.classList.add('question__btn--closed');
//   }

//   if (questionText.classList.contains('question__text--visually')) {
//     questionTextClose();
//     questionBtnOpen();
//   }
//   else {
//     questionTextOpen();
//     questionBtnClose();
//   }
// }

// function menu() {
//   function menuClosed() {
//     mainMenu.classList.remove('main-menu--opened');
//     mainMenu.classList.add('main-menu--closed');
// }

//   function menuOpened() {
//     mainMenu.classList.remove('main-menu--closed');
//     mainMenu.classList.add('main-menu--opened');
//   }

//   function burgerOpen() {
//     burger.classList.remove('burger--close');
//     burger.classList.add('burger--open');
//   }

//   function burgerClose() {
//     burger.classList.remove('burger--open');
//     burger.classList.add('burger--close');
//   }

//   if (mainMenu.classList.contains('main-menu--opened')) {
//     menuClosed();
//     burgerOpen();
//   }
//   else {
//     menuOpened();
//     burgerClose();
//   }
// }

// burger.addEventListener('click', menu);
// questionBtn.addEventListener('click', question);
