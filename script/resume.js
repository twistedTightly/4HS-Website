$(document).ready(function() {
    $("#down-button").hover(function(){
            animateContent("down");
        }, function(){
            $('.resume-content').stop(); 
    });
    
    $("#up-button").hover(function(){
            animateContent("up");
        }, function(){ 
            $('.resume-content').stop(); 
    });
});

function animateContent(direction) {  
    var animationOffset = $('.resume-scroller').height() - $('.resume-content').height();
    if (direction == 'up') {
        animationOffset = 0;
    }
    
    $('.resume-content').animate({ "marginTop": animationOffset + "px" }, "slow");
}
