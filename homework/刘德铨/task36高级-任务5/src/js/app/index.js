
define(['jquery','com/carousel', 'com/lazyload', 'com/gotop', 'com/waterfall', 'com/touch-3d', ],
    function($, carousel, lazyload, gotop, waterfall, threeDim){
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
})