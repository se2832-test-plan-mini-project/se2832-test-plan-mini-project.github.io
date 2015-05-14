// constructor
function slide10() {

}

// Called when the slide is opened
slide10.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
    ayylmao();
};

// Called when the slide is closed
slide10.prototype.exit = function() {

};


function ayylmao() {
    for(var i = 0; i < 5; i++) {
        var distance = Math.floor((Math.random() * 800) - 100);
        $('#ayylmao' + i).css('left', '')
            .css('right', '');
        var direction = (Math.floor(Math.random() * 2) == 0) ? 'left' : 'right';
        console.log(direction);
        console.log(distance);
        $('#ayylmao' + i).css(direction, distance + 'px')
            .animate({
                top: '-200px'
            },
            Math.random() * 10000,
            function () {
                $('#ayylmao' + i).css({
                    top: ($(window).height()) + 'px'
                });
                setTimeout(ayylmao, 10000);
            }
        );
    }
}

