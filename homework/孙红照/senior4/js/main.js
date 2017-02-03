requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app'
	}
})

requirejs(["jquery", "app/carousel", "app/gotop", "app/lazyload", "app/water-basic"], function($, Carousel, GoTop, lazyLoad, WaterFall){
	new Carousel($(".carousel"));
	new GoTop;
	new lazyLoad;
	new WaterFall($("#training .water-basic"), $("#training .btn-readmore"));
})