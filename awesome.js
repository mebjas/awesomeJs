/**
 * AwesomeJS: Collection of several awesome javascript funcitons
 * Dependence: jQuery library
 * Author: Minhaz <minhazav@gmail.com>
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
	$.fn.toArabic = function(options)
	{
		var settings = $.extend( {}, $.fn.toArabic.defaults, options );
		$.fn.toArabic.defaults = settings;
        
		// Apply this for each item
		this.each(function() {
			var no = $(this).html();
			no.trim();
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
	
	$.fn.toArabic.defaults = {
		animate: false
    }
    
    $.fn.toVedic = function(options)
	{
		var settings = $.extend( {}, $.fn.toVedic.defaults, options );
		$.fn.toVedic.defaults = settings;
        
		// Apply this for each item
		this.each(function() {
			var no = $(this).html();
			no.trim();
			if (/\d{1,}/.exec(no)[0] != no) {
				console.log("Can't apply on this large_no [" +no +"] as this ain't pure no!");
				return;
			}
            
			var len = no.length;
			var _no = '';
			var r = 0;
            var first = false;
			while(len--) {
				if (!first && r == 3) {
					_no = ',' +_no;
					r = 0;
                    first = true;
				} else if (first && r == 2) {
                    _no = ',' +_no;
					r = 0;
                }
				_no = no[len] +_no;
				++r;
			}
			$(this).html(_no);
		});
	}
	
	$.fn.toVedic.defaults = {
		animate: false
    }
}( jQuery ));

// @todo - Add the {animate = true} option and create the algo for that

/**
 * awesomeJs.time.js
 * convert timestamps to date formats
 */

(function( $ ) {
	$.fn.toPrettyDate = function(format)
	{
		if (typeof format == "undefined")
			format = $.fn.toPrettyDate.format;

		$(this).each(function() {
			var timestamp = $(this).html();
			timestamp.trim();
			if (parseInt(timestamp) != timestamp) {
				console.log('Incorrect timestamp! Code will HALT; [ awesomejs.time lib ]');
				return;
			}

			timestamp = parseInt(timestamp);
			if (timestamp < 999999999999)
				timestamp *= 1000;

			var t = new Date(timestamp);

			var op = '';
			for(i = 0; i < format.length; i++) {
				switch (format[i]) {
					case 'D': 
					switch (t.getDay()) {
						case 0: op += 'Sun'; break;
						case 1: op += 'Mon'; break;
						case 2: op += 'Tue'; break;
						case 3: op += 'Wed'; break;
						case 4: op += 'Thrs'; break;
						case 5: op += 'Fri'; break;
						case 6: op += 'Sat'; break;
					}; break;
					case 'd': op += t.getDate(); break;
					case 'M':
					switch(t.getMonth()) {
						case 0: op += 'Jan'; break;
						case 1: op += 'Feb'; break;
						case 2: op += 'Mar'; break;
						case 3: op += 'Apr'; break;
						case 4: op += 'May'; break;
						case 5: op += 'Jun'; break;
						case 6: op += 'Jul'; break;
						case 7: op += 'Aug'; break;
						case 8: op += 'Sep'; break;
						case 9: op += 'Oct'; break;
						case 10: op += 'Nov'; break;
						case 11: op += 'Dec'; break;
					}; break;
					case 'y': op += t.getFullYear()%100; break;
					case 'H': op += t.getHours(); break;
					case 'i': op += t.getMinutes(); break;
					case 's': op += t.getSeconds(); break;
					case '^':
						var date = t.getDate(); 
						op += '<sup>';
						if (date == 1 || date == 21 || date == 31)
							op += 'st';
						else if (date == 2 || date == 22)
							op += 'nd';
						else if (date == 3 || date == 23)
							op += 'rd';
						else op += 'th';
						op += '</sup>';
					break;
					default: op += format[i]; break;
				}
			}

			$(this).html(op);
		});
	}
	$.fn.toPrettyDate.format = "D, d M'y";

	$.fn.toRelativeDate = function(animate) {
		if (typeof animate != "undefined") {
			if (animate != true)
				animate = false;
		} else animate = false;

		$(this).each(function() {
			var timestamp = $(this).html();
			timestamp.trim();
			if (parseInt(timestamp) != timestamp) {
				console.log('Incorrect timestamp! Code will HALT; [ awesomejs.time lib ]');
				return;
			}

			var hash = 'awesome' +Math.floor(Math.random()*1000);
			$(this).attr('hash', hash);

			timestamp = parseInt(timestamp);
			if (timestamp < 999999999999)
				timestamp *= 1000;

			var t = new Date().getTime();
			var diff = (t - timestamp) / 1000;

			var $this = this;

			if (diff < 60) {
				$(this).html(' ' +Math.round(diff) +'s ago');
				if (animate) {
					var t = setTimeout(function() {
						if ($($this).attr('hash') != hash)
							return;
						timestamp += 1;
						$($this).html(timestamp);
						$($this).toRelativeDate(true);
					}, 1000);
				}
			}
			else if (diff / 60 < 60) {
				$(this).html(' ' +Math.round(diff/60) +'m ago');
				if (animate) {
					var t = setTimeout(function() {
						if ($($this).attr('hash') != hash)
							return;
						timestamp += 60;
						$($this).html(timestamp);
						$($this).toRelativeDate(true);
					}, 60*1000);
				}
			}
			else if (diff / 3600 < 24) $(this).html(' ' +Math.round(diff/3600) +'h ago');
			else if (diff / 86400 < 10) $(this).html(' ' +Math.round(diff/86400) +'d ago');
			else {
				$(this).toPrettyDate("D, d^ M'y");
				$(this).prepend(' on ');
			}


		});
	};
}( jQuery ));