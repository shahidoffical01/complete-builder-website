jQuery(document) .ready(function($) {
	counter();

});


function counter(){
	$('.counter') .counterUp({
		delay:5,
		time:2000
	});
}