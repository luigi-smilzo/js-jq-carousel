$(document).ready( function() {
    
    // REFERENCES
    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');
    var firstImg = $('.img-container img.first');
    var lastImg = $('.img-container img.last');
    var firstDot = $('.first.dot');
    var lastDot = $('.last.dot');
    
    // EVENTS
    // Clicks
    arrowRight.click( function() {
        var activeImg = $('.img-container img.active');
        var activeDot = $('.dot.active');

        nextImg(activeImg, firstImg, activeDot, firstDot);
    });
    
    arrowLeft.click( function() {
        var activeImg = $('.img-container img.active');
        var activeDot = $('.dot.active');

        prevImg(activeImg, lastImg, activeDot, lastDot);
    });
    
    // Keydown
    $(document).keydown(function(e) {
        
        if (e.keyCode == 37) {
            var activeImg = $('.img-container img.active');
            var activeDot = $('.dot.active');

            prevImg(activeImg, lastImg, activeDot, lastDot);
        } else if (e.keyCode == 39) {
            var activeImg = $('.img-container img.active');
            var activeDot = $('.dot.active');

            nextImg(activeImg, firstImg, activeDot, firstDot);
        }
    });
});


// FUNCTIONS
function prevImg (activeImg, lastImg, activeDot, lastDot) {
    if ( activeImg.hasClass('first')) {
        activeImg.removeClass('active');
        lastImg.addClass('active');
        activeDot.removeClass('active')
        lastDot.addClass('active');
    } else {
        activeImg.removeClass('active');
        activeImg.prev().addClass('active');
        activeDot.removeClass('active');
        activeDot.prev().addClass('active');
    }
}

function nextImg (activeImg, firstImg, activeDot, firstDot) {
    if ( activeImg.hasClass('last')) {
        activeImg.removeClass('active');
        firstImg.addClass('active');
        activeDot.removeClass('active')
        firstDot.addClass('active');
    } else {
        activeImg.removeClass('active');
        activeImg.next().addClass('active');
        activeDot.removeClass('active');
        activeDot.next().addClass('active');
    }
}
