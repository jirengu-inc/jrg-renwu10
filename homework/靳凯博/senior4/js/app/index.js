define(['jquery','app/carousel','app/jsonp','app/waterfall','app/gotop'],function($,Carousel,Jsonp,Waterfall,GoTop){

    Carousel.init($('.box'))
    new Jsonp($('.waterfall-ct'));
    $('.loadmore').on('click',function(){
        //因为每次都新new了一个curPage就不会递增
        new Jsonp($('.waterfall-ct'));
    })
    GoTop.init($('body'), $('body'), 200);
})