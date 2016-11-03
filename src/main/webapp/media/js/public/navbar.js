$(document).ready(function() {
	var url = window.location.href;
	var ret = url.split("ke")[1];
	if (ret.indexOf("/cluster") > -1) {
		$("#demo2").addClass('collapse in');
		$("#demo2").attr("aria-expanded", true);
	} else if (ret == "/consumers") {
		$("div[id='navbar_click'] li").removeClass('active')
		$("#navbar_consumers").addClass('active');
	} else if (ret == "/") {
		$("div[id='navbar_click'] li").removeClass('active')
		$("#navbar_dash").addClass('active');
	} else if (ret.indexOf("/topic") > -1) {
		$("#demo").addClass('collapse in');
		$("#demo").attr("aria-expanded", true);
	} else if (ret.indexOf("/alarm") > -1) {
		$("#demo1").addClass('collapse in');
		$("#demo1").attr("aria-expanded", true);
	}
});