(function($){
    $.fn.carousel = function(options){

        var defaults = { 
                display: 1,
                startIndex: 0
            };
        var options = $.extend(defaults, options);
        var content = $(this);
        var uiSlide = $(".content ul", content);
        var next = $(".next", content);
        var prev = $(".prev", content);
        var contentWidth, length, page=-1;
        return this.each(function(){
            init();
          }
        );
        function init(){
            var slides = uiSlide.children();
            contentWidth = $(slides[0]).outerWidth(true);
            length = slides.length;
            uiSlide.css("width", (contentWidth * length *  options.display));
            slide(options.startIndex+1,false);
            prev.click(function(){slide(-options.display,true);});
            next.click(function(){slide(options.display,true);});
            next.css("left",contentWidth*options.display);
        }
        function slide(index,isAnimationAllowed){
            if(page + index > -1 && page + index < length){
                page += index;
                var oPosition = {};
                oPosition["left"] = -(page * contentWidth); 
                uiSlide.animate(oPosition,{
                    duration: isAnimationAllowed?800:0
                    });
                prev.toggleClass("hide",  !(page > 0));
                if(options.display==1){
                    next.toggleClass("hide", !(page < length - 1));
                }
                else{
                    next.toggleClass("hide", !(page < length - 1 - options.display));
                }
            }
        }
    };
})(jQuery);