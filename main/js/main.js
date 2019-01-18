window.onload = init();




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
    } else{
        $("#nav").css("background-color", "#4d657d");
    }


 }