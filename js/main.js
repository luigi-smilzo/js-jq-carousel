$(document).ready( function() {
    
    // REFERENCES
    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');
    var firstImg = $('.img-container img.first');
    var lastImg = $('.img-container img.last');
    var firstDot = $('.first.dot');
    var lastDot = $('.last.dot');
    
    // EVENTS
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
});

// FUNCTIONS
function prevImg (active, last, dot, lastDot) {
    if ( active.hasClass('first')) {
        active.removeClass('active');
        last.addClass('active');
        dot.removeClass('active')
        lastDot.addClass('active');
    } else {
        active.removeClass('active');
        active.prev().addClass('active');
        dot.removeClass('active');
        dot.prev().addClass('active');
    }
}

function nextImg (active, first, dot, firstDot) {
    if ( active.hasClass('last')) {
        active.removeClass('active');
        first.addClass('active');
        dot.removeClass('active')
        firstDot.addClass('active');
    } else {
        active.removeClass('active');
        active.next().addClass('active');
        dot.removeClass('active');
        dot.next().addClass('active');
    }
}