$(document).ready(function(){
  $('.slider').slider();
});
$(document).ready(function(){
     $('.parallax').parallax();
});



$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
