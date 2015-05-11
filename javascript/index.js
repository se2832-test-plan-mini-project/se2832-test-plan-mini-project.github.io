var locations = ['index', 'slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6', 'slide-7', 'slide-8', 'slide-9'];
var currentLocation;

$(document).ready(function() {
  navigateTo('index');
  $('#previous').click(navigatePrevious);
  $('#next').click(navigateNext);
});

function navigateTo(page) {
  currentLocation = page;
  var page = 'slide/'+page+'.html';
  console.log(page);
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
  console.log(currentLocation);
  var nextIndex = locations.indexOf(currentLocation) + 1;
  if (nextIndex < locations.length) {
    console.log(nextIndex);
    navigateTo(locations[nextIndex]);
  }
}