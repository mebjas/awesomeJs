/**
 * awesomeJs.smoothScroll.js
 * converts any internal anchor tag, to source of smooth js transition.
 * just include this script in your page & it will automatically add
 * the mentioned feature.
 * Dependency: jQuery library
 * Author: Minhaz <minhazav@gmail.com>
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