$(document).ready( function() {
    
    // REFERENCES
    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');
    
    // EVENTS
    // Clicks
    arrowRight.click( function() {
        prevNext('next');
    });
    arrowLeft.click( function() {
        prevNext('prev');
    });
    
    // Keydown
    $(document).keydown(function(e) {
        
        if (e.keyCode == 37) {
            prevNext('prev');

        } else if (e.keyCode == 39) {
            prevNext('next');
        }
    });
});


// FUNCTIONS
function prevNext (direction) {
    var activeImg = $('.img-container img.active');
    var activeDot = $('.dot.active');
    
    activeImg.removeClass('active');
    activeDot.removeClass('active')
    
    // NEXT
    if (direction === 'next') {
        if ( activeImg.hasClass('last') ) {
            $('.img-container img.first').addClass('active');
            $('.first.dot').addClass('active');
        } else {
            activeImg.next().addClass('active');
            activeDot.next().addClass('active');
        }
    }

    // PREV
    else if (direction === 'prev') {
        if ( activeImg.hasClass('first') ) {
            $('.img-container img.last').addClass('active');
            $('.last.dot').addClass('active');
        } else {
            activeImg.prev().addClass('active');
            activeDot.prev().addClass('active');
        }
    }
}