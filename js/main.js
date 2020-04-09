$(document).ready( function() {
    
    // REFERENCES
    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');
    var firstImg = $('.img-container img.first');
    var lastImg = $('.img-container img.last');
    
    
    // EVENTS
    arrowRight.click( function() {
        var activeImg = $('.img-container img.active');
        
        if ( activeImg.hasClass('last')) {
            activeImg.removeClass('active');
            firstImg.addClass('active');
        } else {
            activeImg.removeClass('active');
            activeImg.next().addClass('active');
        }
    });
});