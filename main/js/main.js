window.onload = init();




function init(){
    $("#design-button").click( function() {
        $('html,body').unbind().animate({scrollTop: $("#design").offset().top-160},'fast');
    });

 }