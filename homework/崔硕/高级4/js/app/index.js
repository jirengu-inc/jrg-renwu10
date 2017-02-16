/**
 * Created by NICK on 2016/10/2.
 */
define( ['jquery','com/carousel','com/gotop','com/exposure','com/waterfall'], function ($,Carousel,GoTop,Exposure,WaterFall) {
    Carousel.init($('.carousel'));
    new GoTop;
    Exposure($('#about li'));
    WaterFall($('#pic-ct'));
})