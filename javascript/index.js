// constructor
function index() {

}

// Called when the slide is opened
index.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  console.log('entering');
};

// Called when the slide is closed
index.prototype.exit = function() {

};