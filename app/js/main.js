
$(document).ready(function(){

  $('.menu-drop').on('click', function(e) {
   e.preventDefault(); 
   $(this).closest('.container').find('.header-flex-bottom .flex-item:last-child .menu').slideToggle();
  });

  $(".owl-carousel").owlCarousel({
   navigation : true,
   navigationText : ["",""],
   rewindNav : true,
   scrollPerPage : false, 
   singleItem : true

 });

  $('.more-link').on('click', function(e) {
   e.preventDefault(); 
   $(this).hide().prevAll().css('display', 'inline-block');
 });

  $('.menu-btn').on('click', function(e) {
   e.preventDefault(); 
   $(this).closest('header').find('.header-menu').slideToggle();
 });

  $('.drop-language').on('click', function(e) {
   e.preventDefault(); 
   $(this).next().slideToggle();
 });

  $('.head-2').on('click', function(e) {
   e.preventDefault(); 
   $(this).next().slideToggle();
 });


});