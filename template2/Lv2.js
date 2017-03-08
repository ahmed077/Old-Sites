$(function() {
   var images = $('.images'),
       rightBtn = $('.right'),
       leftBtn = $('.left'),
       currentImg,
       carouselPlay,
       clickedInd,
       carouselIndicators = $('.carInd');
    
//                  CAROUSEL    
//carousel indicators
carouselIndicators.click(function(){
    console.log(this);
    this.addClass('fill');
    var current = this;
    current.attr('class','fill');
});
for ( var i = 0 ; i<images.length ; i++){
    if (images.eq(i).hasClass('activeImg')){
        currentImg = i;
        carouselIndicators.eq(currentImg).addClass('fill');
        break;
    }
}
//carousel control
rightBtn.click(function() {
    images.eq(currentImg).removeClass('activeImg');
    carouselIndicators.eq(currentImg).removeClass('fill');
    currentImg++;
    if ( currentImg == images.length ) {
        currentImg = 0;
    }
    images.eq(currentImg).addClass('activeImg');
    carouselIndicators.eq(currentImg).addClass('fill');
});
leftBtn.click(function() {
    images.eq(currentImg).removeClass('activeImg');
    carouselIndicators.eq(currentImg).removeClass('fill');
    currentImg--;
    if ( currentImg == 0 ) {
        currentImg = images.length - 1;
    }
    images.eq(currentImg).addClass('activeImg');
    carouselIndicators.eq(currentImg).addClass('fill');
}); 
    
//carousel auto play
    
carouselPlay = setInterval(function() {
    carousel();
},5000);
function carousel() {
    images.eq(currentImg).removeClass('activeImg');
    carouselIndicators.eq(currentImg).removeClass('fill');
    currentImg++;
    if ( currentImg == images.length ) {
        currentImg = 0;
    }
    images.eq(currentImg).addClass('activeImg');
    carouselIndicators.eq(currentImg).addClass('fill');
}

});