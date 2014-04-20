
$(document).ready(function() {
	$("a").click(function(event) {
		if($(this).attr("href").substr(0, 1) === "#") {
			
			//prevent the default action
			event.preventDefault();

			//take document scroll to this position
			$('html,body').animate( {
	        scrollTop: $("a[name='"+$(this).attr("href").replace("#", "")+"']").offset().top},
	        1000);
		}
	});
});