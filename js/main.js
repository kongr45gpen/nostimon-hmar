var activeCallback = $.Callbacks();

var WebFontConfig = {
    google: { families: ['GFS Neohellenic:400,700:greek,latin'] },
    custom: {
        families: ['GFS Neohellenic'],
        urls: ['fonts/fonts.css']
    },
    active: function () { activeCallback.fire(); }
};

WebFont.load(WebFontConfig);

(function($){

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

})(jQuery);

$(document).ready(function() {
    var $p =  $(".jumbotron p");

    $p.each(function() {
        // Store the object
        var $this = $(this);

        var resizer = function() {
            var desiredWidth = $(".jumbotron h1").width();

            var currentWidth = $this.outerWidth();
            var currentSize = parseFloat($this.css('font-size'));
            var desiredSize = currentSize * desiredWidth / currentWidth;
            var currentSpace = parseFloat($this.css('letter-spacing'));
            var desiredSpace = currentSpace * desiredWidth / currentWidth;

            $this.css('letter-spacing', desiredSpace);
            $this.css('font-size', desiredSize);

        };

        activeCallback.add(resizer);

        resizer();
    });

    $(".choir .participant").shuffle();
});

