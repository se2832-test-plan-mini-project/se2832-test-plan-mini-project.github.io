// constructor
function slide4() {

}

// Called when the slide is opened
slide4.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
};

// Called when the slide is closed
slide4.prototype.exit = function() {

};