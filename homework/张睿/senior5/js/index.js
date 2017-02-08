var $ = require("jquery");

var Carousel = require("./carousel.js");
require("style-loader!css-loader!../css/carousel.css");
Carousel.init($(".carousel"));

var GoTop = require("./gotop.js");
require("style-loader!css-loader!../css/gotop.css")
new GoTop;

var WaterFall = require("./water-basic.js")
new WaterFall($("#addmore .water-basic"), $("#addmore .btn-readmore"));

var Exposure = require("./exposure.js")
new Exposure($(".exposure"));
