window.onload = init();

var dashGalleryViewing = 1;

function init(){
    $("#about-button").click( function() {
        $('html,body').unbind().animate({scrollTop: $("#about").offset().top-160},'fast');
    });
    $("#development-button").click( function() {
        $('html,body').unbind().animate({scrollTop: $("#development").offset().top-160},'fast');
    });
    $("#designs-button").click( function() {
        $('html,body').unbind().animate({scrollTop: $("#designs").offset().top-160},'fast');
    });
    $("#contact-button").click( function() {
        $('html,body').unbind().animate({scrollTop: $("#contact").offset().top-160},'fast');
    });
    $("#scroll-to-top-button").click( function() {
        $('html,body').unbind().animate({scrollTop: 0},'fast');
        $("#nav").css("background-color", "#3d5267");
        $("#scroll-to-top").css("display","none");
    });
    $("#bb-open-project").unbind('click').bind('click', function () {
        var win = window.open("https://play.google.com/store/apps/details?id=com.JaseOwens.bouncingBalls", '_blank');
    });
    $("#uc-open-project").unbind('click').bind('click', function () {
        var win = window.open("https://play.google.com/store/apps/details?id=com.companyname.Unit_Circle", '_blank');
    });
    $("#ad-open-project").unbind('click').bind('click', function () {
        var win = window.open("https://anes.uab.edu/Dashboard/", '_blank');
    });

    // $("#dash-image-left").mouseup( function() {

    // });

    $(window).bind('mousewheel DOMMouseScroll', function(event){
        lightenNavOnScroll();
    });

    (function($) {

        /**
         * 
         * FOUND AT: https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
         * 
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */
      
        $.fn.visible = function(partial) {
          
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
          
          return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
      
        };
          
      })(jQuery);

      $(window).scroll(function(event) {
  
        $(".module").each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
            el.addClass("come-in"); 
          } 
        });
        
      });

      var win = $(window);
        var allMods = $(".design-gallery-card");

        // Already visible modules
        allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible"); 
        } 
        });

        win.scroll(function(event) {
        
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
            el.addClass("come-in"); 
            } 
        });
        
        });
 }

 function lightenNavOnScroll(){
    var scroll = $(window).scrollTop();
    navOpacity = 100/scroll;
    if(scroll < 100){
        $("#nav").css("background-color", "#3d5267");        
        $("#scroll-to-top").css("display","none");

    } else{
        $("#nav").css("background-color", "#4d657d");
        $("#scroll-to-top").css("display","block");
    }

    if(scroll < 200){
        $("#scroll-to-top").css("display","none");
    } else{
        $("#scroll-to-top").css("display","block");
    }

 }

 function moveDashLeft() {
    prevDashGalleryViewing = dashGalleryViewing;
    dashGalleryViewing -= 1;
    if(dashGalleryViewing <= 0){
        dashGalleryViewing = 3;
    } 
    $("#dash-"+prevDashGalleryViewing).removeClass("viewing");
    $("#dash-"+prevDashGalleryViewing).addClass("hidden");

    $("#dash-"+dashGalleryViewing).removeClass("hidden");
    $("#dash-"+dashGalleryViewing).addClass("viewing");
 }
 function moveDashRight() {
    prevDashGalleryViewing = dashGalleryViewing;
    dashGalleryViewing += 1;
    if(dashGalleryViewing > 3){
        dashGalleryViewing = 1;
    } 
    $("#dash-"+prevDashGalleryViewing).removeClass("viewing");
    $("#dash-"+prevDashGalleryViewing).addClass("hidden");

    $("#dash-"+dashGalleryViewing).removeClass("hidden");
    $("#dash-"+dashGalleryViewing).addClass("viewing");
}
