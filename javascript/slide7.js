// constructor
function slide7() {

}

// Called when the slide is opened
slide7.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
};

// Called when the slide is closed
slide7.prototype.exit = function() {

};