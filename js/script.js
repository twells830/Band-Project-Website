$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  })
  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
  });

//clothes-pics container for whatever you want to land
  if (wScroll > $('.clothes-pics').offset().top - ($(window).height() * 0.1)) {
    $('.clothes-pics figure').each(function(i) {
      setTimeout(function() {
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 500 * (i+1));
    });
  }
});
