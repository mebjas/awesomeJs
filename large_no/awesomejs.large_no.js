/**
 * awesomeJs.large_no.js
 * Convert any large no like 9846387568375 to 9,846,387,568,375
 * just include this script in your page & call with appropriate object
 * Dependency: jQuery library
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