/**
 * Created by yaoyao on 2017/2/18.
 */

define(['jquery'], function($) {
    Exposure = (function(){

        function Exposure($target, callback){
            this.$target = $target;
            this.callback = callback;
            this.bind();
            this.check();
        }

        Exposure.prototype.bind = function(){
            var _this = this;
            $(window).on('scroll', function(){
                _this.check();
            })
        }

        Exposure.prototype.check = function(){
            if(this.isShow(this.$target)){
                this.callback(this.$target);
            }
        }
        Exposure.prototype.isShow = function(){
            var windowHeight = $(window).height(),
                scrollTop = $(window).scrollTop(),
                offsetTop = this.$target.offset().top,
                nodeHeight = this.$target.height();
            if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
                return true;
            }else{
                return false;
            }
        }

        return {
            init: function($targets, callback){
                $targets.each(function(idx, target){
                    new Exposure($(target), callback);
                })

            }
        }
    })();
    return Exposure;
})