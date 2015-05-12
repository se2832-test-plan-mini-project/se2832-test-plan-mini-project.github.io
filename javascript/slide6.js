// constructor
function slide6() {

}

// Called when the slide is opened
slide6.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
};

// Called when the slide is closed
slide6.prototype.exit = function() {

};