// constructor
function slide1() {

}

// Called when the slide is opened
slide1.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
};

// Called when the slide is closed
slide1.prototype.exit = function() {

};