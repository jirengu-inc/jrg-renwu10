require("./css/style.css");

var Carousel = require('./carousel'),
    GoTop = require('./gotop'),
  	WaterFall = require('./waterfall_ajax');

new GoTop();
Carousel.init($('.carousel'));
WaterFall.init( $('.sam-list') );


	