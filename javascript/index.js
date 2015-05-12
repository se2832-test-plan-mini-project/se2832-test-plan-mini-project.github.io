var slideNames = ['index', 'slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6', 'slide-7', 'slide-8', 'slide-9'];
var slides = {};
var currentLocation;

$(document).ready(function() {
  loadSlides(function() {
    navigateTo('index', false);
    $('#previous').click(navigatePrevious);
    $('#next').click(navigateNext);
  });
});

$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left arrow key
      navigatePrevious();
      break;
    case 39: // right arrow key
      navigateNext();
      break;
    default:
      return;
  }
  e.preventDefault();
});

function navigateTo(page, animate) {
  currentLocation = page;
  if (animate === false) {
    $('#content').html(slides[page]);
    return;
  }
  $('#content').animate({height: '1px'}, 250, function() {
    $('#content').html(slides[page]);
    $('#content').animate({height: '100%'}, 250);
  });
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