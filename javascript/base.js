var slideNames = ['index', 'slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7', 'slide8', 'slide9'];
var slides = {};
var currentLocation = 'index';

// selectors
var content;

$(document).ready(function() {
  loadSlides(function() {
    $('#previous').click(navigatePrevious);
    $('#next').click(navigateNext);
    $('#ninja').css('top', ($(window).height())+'px');
    content = $('#content');
    navigateTo('index');
    setTimeout(ninja, 20000);
  });
});

function ninja() {
  var distance = Math.floor((Math.random() * 800) - 100);
  $('#ninja').css('left', '');
  $('#ninja').css('right', '');
  var direction = (Math.floor(Math.random()*2) == 0) ? 'left' : 'right';
  console.log(direction);
  console.log(distance);
  $('#ninja').css(direction, distance+'px');
  $('#ninja').animate({
      top: ($(window).height()-100)+'px'
    },
    2500,
    function() {
      setTimeout(function() {
        $('#ninja').animate({
            top: ($(window).height())+'px'
          },
          2500,
          function() {
            setTimeout(ninja, 15000);
          }
        );
      }, 2500);
    }
  );
}

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
  slides[currentLocation].handler.exit();
  currentLocation = page;
  var html = slides[page].html;
  content.html(html);
  slides[currentLocation].handler.enter();
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
        slides[slideName] = {
          html: html,
          handler: new window[slideName]()
        };
        completed ++;
        if (completed == slideNames.length) {
          callback();
        }
      });
    })(slideNames[i]);
  }
}