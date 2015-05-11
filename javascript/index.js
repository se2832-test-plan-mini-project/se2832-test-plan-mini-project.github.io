var locations = ['index'];
var currentLocation;

$(document).ready(function() {
  navigateTo('index');
  $('#previous').click(navigatePrevious);
  $('#next').click(navigateNext);
});

function navigateTo(page) {
  var page = 'slide/'+page+'.html';
  currentLocation = page;
  $.get(page, function(html) {
    $('#content').html(html);
  });
}

function navigatePrevious() {
  var nextIndex = locations.indexOf(currentLocation) - 1;
  if (nextIndex >= 0) {
    navigateTo(locations[nextIndex]);
  }
}

function navigateNext() {
  var nextIndex = locations.indexOf(currentLocation) + 1;
  if (nextIndex < locations.length) {
    navigateTo(locations[nextIndex]);
  }
}