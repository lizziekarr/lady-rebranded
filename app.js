(function(){

$(document).ready(function(){
  $('.commercial').fadeIn(3000);

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  //first icon set floats in
  if(wScroll > $('.learn').offset().top - ($(window).height() / 1.2)) {
    $('.icon-block').each(function(i){
      setTimeout(function() {
      $('.our-approach .icon-block').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });
  }

 //second icon set floats in

  if(wScroll > $('.jumpstart').offset().top - ($(window).height() / 2)) {
    $('.icon-block').each(function(i){
      setTimeout(function() {
      $('.jumpstart .icon-block').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });
  }

  //access button slide up
  if(wScroll > $('.blurb').offset().top - ($(window).height() / 1.5)){
    $('.access').addClass('slide-up');
  }

  //quote fade in
  if(wScroll > $('.photo-two').offset().top){
    $('.quote').addClass('enter');
  }

  //inspo fades in, journal fades in
  if(wScroll > $('.shop').offset().top - ($(window).height() / 2.5)){
    $('.inspo').addClass('show');
  }

  if(wScroll > $('.shop').offset().top - ($(window).height() / 1.2)){
    $('.journal-pic').addClass('show');
    $('.journal-copy').addClass('show');
  }


});

});

})();
