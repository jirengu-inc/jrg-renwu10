var $ = require('./js/lib/jquery');
var Carousel = require('./js/app/Carousel');
var GoTop = require('./js/app/Gotop');
var Exposure = require('./js/app/Exposure');


Carousel.init($('.carousel'));

new GoTop;

Exposure.init($('img, .about li'), function($node) {
   showImg($node)
});

function showImg($img) {
   var imgUrl = $img.attr('data-src');
   $img.attr('src', imgUrl);
}