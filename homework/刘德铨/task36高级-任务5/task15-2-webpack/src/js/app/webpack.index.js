
var $ = require('jquery');
var carousel = require('../com/carousel');
var lazyload = require('../com/lazyload');
var gotop = require('../com/gotop');
var waterfall = require('../com/waterfall');
var threeDim = require('../com/touch-3d');



 carousel.roll($('.carousel'));

 lazyload.load($('img'), function($target){ 
    if($target.attr('data-src')) {
       var imgUrl = $target.attr('data-src');
       $target.attr('src', imgUrl);
       $target[0].classList.add('load');
    }
});

 gotop.go($('body'));

 threeDim.threeD($('.album'));

 waterfall.flow($('.wrap'));
