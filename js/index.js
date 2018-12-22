$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('.profile-name').addClass('fixed');
			 }
			 else {
				 $('.profile-name').removeClass('fixed');
			 }
		});
	});
