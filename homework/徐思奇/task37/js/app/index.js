define(['jquery', 'app/carousel', 'app/gotop', 'app/loadmore'], function($, carousel, gotop, loadmore){
	gotop.init($('body'), 500)

	carousel.init($('.carousel'))

	loadmore.init($('.waterfall-ct'), $('.loadmore'))
})