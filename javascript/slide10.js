// constructor
function slide10() {

}

// Called when the slide is opened
slide10.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
};

// Called when the slide is closed
slide10.prototype.exit = function() {

};