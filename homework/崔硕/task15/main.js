$(document).on('scroll', function(e){
	var top = $(document).scrollTop()

	if(top>200){
		$('#page-top').css({
			"background": "rgba(32,32,32,.5)"
		})
	} else {
		$('#page-top').css({
			"background": "rgba(32,32,32,1)"
		})
	}
})