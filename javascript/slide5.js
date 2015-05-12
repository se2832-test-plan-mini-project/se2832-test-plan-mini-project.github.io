// constructor
function slide5() {

}

// Called when the slide is opened
slide5.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
};

// Called when the slide is closed
slide5.prototype.exit = function() {

};