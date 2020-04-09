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
    });
    
    arrowLeft.click( function() {
        var activeImg = $('.img-container img.active');
        var activeDot = $('.dot.active');
        
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
    });
});