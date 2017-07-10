$('.no-js').removeClass('no-js');

$(function (){
  $('.question__btn').click(function(){
    if($(this).hasClass('question__btn--opened')){
      $(this).removeClass('question__btn--opened');
      $(this).siblings('p').removeClass('question__text--visually');
      return;
    }

    $('.question__btn').removeClass('question__btn--opened');
    $(this).addClass('question__btn--opened');
    $('.question__text').removeClass('question__text--visually');
    $(this).siblings('p').addClass('question__text--visually');
  });
});

$('.burger').click(function(){
  $(this).toggleClass('burger--close').toggleClass('burger--open');
  $('.main-menu').toggleClass('displayDisplay');
});
