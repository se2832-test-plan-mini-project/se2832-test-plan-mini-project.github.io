$(document).ready(function() {
  navigateTo('index');
});

function navigateTo(page) {
  var page = '/slide/'+page+'.html';
  $.get(page, function(html) {
    $('#content').html(html);
  });
}