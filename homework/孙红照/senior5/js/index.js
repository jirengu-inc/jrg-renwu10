var $ = require("jquery");

var Carousel = require("./carousel.js");
require("../css/carousel.css");
new Carousel($(".carousel"));

var GoTop = require("./gotop.js");
require("../css/gotop.css")
new GoTop;

var LazyLoad = require("./lazyload.js");
new LazyLoad;

var WaterFall = require("./water-basic.js")
new WaterFall($("#training .water-basic"), $("#training .btn-readmore"));
