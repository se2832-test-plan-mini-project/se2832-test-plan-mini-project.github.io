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
    var distance = Math.floor((Math.random() * 800) - 100);
    $('#ayylmao').css('left', '')
        .css('right', '');
    var direction = (Math.floor(Math.random()*2) == 0) ? 'left' : 'right';
    console.log(direction);
    console.log(distance);
    $('#ayylmao').css(direction, distance+'px')
        .animate({
            top: '-100px'
        },
        10000,
        function() {
            setTimeout(function() {
                $('#ayylmao').animate({
                        top: ($(window).height())+'px'
                    },
                    2000,
                    function() {
                        setTimeout(ayylmao, 2000);
                    }
                );
            }, 4000);
        }
    );
}

