var slideNames = ['index', 'slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6', 'slide-7', 'slide-8', 'slide-9'];
var slides = {};
var currentLocation;

$(document).ready(function() {
  loadSlides(function() {
    navigateTo('index');
    $('#previous').click(navigatePrevious);
    $('#next').click(navigateNext);
  });
});

function navigateTo(page) {
  currentLocation = page;
  console.log(page);
  $('#content').html(slides[page]);
}

function navigatePrevious() {
  var nextIndex = slideNames.indexOf(currentLocation) - 1;
  if (nextIndex >= 0) {
    navigateTo(slideNames[nextIndex]);
  }
}

function navigateNext() {
  var nextIndex = slideNames.indexOf(currentLocation) + 1;
  if (nextIndex < slideNames.length) {
    navigateTo(slideNames[nextIndex]);
  }
}

function loadSlides(callback) {
  var completed = 0;
  for (var i in slideNames) {
    (function(slideName) {
      var slide = 'slide/'+slideName+'.html';
      $.get(slide, function(html) {
        slides[slideName] = html;
        completed ++;
        if (completed == slideNames.length) {
          callback();
        }
      });
    })(slideNames[i]);
  }
}