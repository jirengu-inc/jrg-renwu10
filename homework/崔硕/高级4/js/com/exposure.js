/**
 *
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-21 17:30:16
 * @version $Id$
 */

define(['jquery'],function ($) {
    var Exposure = (function () {
        function exposure($node){
            var clock;
            $(window).on('scroll', function(){

                //用户鼠标滚轮滚动一次，有多次事件响应。下面的 setTimeout 主要是为性能考虑，只在最后一次事件响应的时候执行 checkshow
                if(clock){
                    clearTimeout(clock);
                }
                clock = setTimeout(function(){
                    checkShow();
                }, 300);

            });

            // 用户第一次打开页面，还未滚动窗口的时候需要执行一次 checkShow
            checkShow();

            function checkShow(){
                $node.each(function(){
                    var $cur = $(this);
                    if($cur.attr('isLoaded')){
                        return;
                    }

                    if(isShow($cur)){
                        showImg($cur);
                    }
                });
            }

            function isShow($el){
                var scrollH = $(window).scrollTop(),
                    winH = $(window).height(),
                    top = $el.offset().top;

                if(top < winH + scrollH){
                    return true;
                }else{
                    return false;
                }
            }

            function showImg($el){
                $el.css('opacity',1);
                $el.attr('isLoaded', true);
            }
        }
        return exposure
    })()
    return Exposure
})



// Exposure.one($imgs, function(){
//   showImg($(this));
// });