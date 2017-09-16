$('.btns').on('click', function(){
  var newBg = $(this).css('background-color');
  $('.first').css('background-color', newBg);
}); 
