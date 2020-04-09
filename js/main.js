$(document).ready( function() {
    
    // REFERENCES
    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');
    var activeImg = $('.img-container img.active');
    

    // EVENTS
    arrowRight.click( function() {
        activeImg.removeClass('active');
    });
});