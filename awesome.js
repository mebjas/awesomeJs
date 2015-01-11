/**
 * AwesomeJS: Collection of several awesome javascript funcitons
 * Dependence: jQuery library
 */


/**
 * awesomeJs.smoothScroll.js
 * converts any internal anchor tag, to source of smooth js transition.
 * just include this script in your page & it will automatically add
 * the mentioned feature.
 */

(function( $ ) {
	$.fn.smoothscroll = function(options)
	{
		// Apply this for each item
		$("a").click(function(event) {
            if ($(this).attr("href").substr(0, 1) === "#") {

                //prevent the default action
                event.preventDefault();

                //take document scroll to this position
                $('html,body').animate({
                    scrollTop: $("a[name='" +$(this).attr("href").replace("#", "") +"']").offset().top},
                    1000);
            }
        });
	}
}( jQuery ));

/**
 * awesomeJs.large_no.js
 * Convert any large no like 9846387568375 to 9,846,387,568,375
 * just include this script in your page & call with appropriate object
 */

(function( $ ) {
	$.fn.largeNo = function(options)
	{
		var settings = $.extend( {}, $.fn.largeNo.defaults, options );
		$.fn.largeNo.defaults = settings;
        
		// Apply this for each item
		this.each(function() {
			var no = $(this).html();
			no.replace(' ', '');
			if (/\d{1,}/.exec(no)[0] != no) {
				console.log("Can't apply on this large_no [" +no +"] as this ain't pure no!");
				return;
			}
			var len = no.length;
			var _no = '';
			var r = 0;
			while(len--) {
				if (r == 3) {
					_no = ',' +_no;
					r = 0;
				}
				_no = no[len] +_no;
				++r;
			}
			$(this).html(_no);
		});
	}
	
	$.fn.largeNo.defaults = {
		animate: false
    }
}( jQuery ));

// @todo - Add the {animate = true} option and create the algo for that