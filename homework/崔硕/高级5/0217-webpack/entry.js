// require("./style.css") // 载入 style.css
// document.write('It works.')
// document.write(require('./module.js')) // 添加模块

var Carousel = require('./js/carousel'),
	GoTop = require('.//js/gotop'),
  	WaterFall = require('./js/waterfall'),
  	Exposure = require('./js/exposure');


	Carousel.init($('.carousel'));
	WaterFall($('#pic-ct'));
	Exposure($('#about li'));

	new GoTop;
	



    // Carousel.init($('.carousel'));
    // new GoTop;
    // Exposure($('#about li'));
    // WaterFall($('#pic-ct'));