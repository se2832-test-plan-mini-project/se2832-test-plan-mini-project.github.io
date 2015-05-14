// constructor
function slide10() {

}
var ayyyylmao = false;

// Called when the slide is opened
slide10.prototype.enter = function() {
  $('h1').css('color', Please.make_color());
  $.each($('p'), function(){
    $(this).css('color', Please.make_color());
  });
    ayyyylmao = true;
    ayyInit();

};


// Called when the slide is closed
slide10.prototype.exit = function() {
    ayyyylmao = false;
};

function ayyInit(){
    for(var i = 0; i < 5; i++) {
        ayylmao(i);
    }
}

function ayylmao(ayy) {
    if(ayyyylmao) {
        var distance = Math.floor((Math.random() * 800) - 100);
        $('#ayylmao' + ayy).css('left', '')
            .css('right', '');
        var direction = (Math.floor(Math.random() * 2) == 0) ? 'left' : 'right';
        console.log(direction);
        console.log(distance);
        $('#ayylmao' + ayy).css(direction, distance + 'px')
            .animate({
                top: '-200px'
            },
            Math.random() * 10000,
            function () {
                $('#ayylmao' + ayy).css({
                    top: ($(window).height()) + 'px'
                });
                setTimeout(function () {
                    ayylmao(ayy);
                }, 10000);
            }
        );
    }
}

function brainwash(){
    var pizza = $('#pizza');
    pizza.show();
    setTimeout(function(){
        pizza.hide();
        setTimeout(function(){brainwash();}, Math.random() * 3000 + 500);
    }, 5
    );
}