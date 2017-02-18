
var lazyLoad = (function(){
    function load($target){
        this.$target = $target;
        /*console.log(this.$target);*/
        this.bind();
    }

    load.prototype = {
        bind: function(){
            var _this = this;
            $(window).on('scroll', function(){
                if(isShow(_this.$target)){
                    
                }
            })

        },

        isShow: function(node){
            var windowHeight = $(window).height(),
                scrollTop = $(window).scrollTop(),
                offsetTop = this.$target.offset().top,
                nodeHeight = this.$target.outerHeight(true);

            if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
                return true;
            }else{
                return false;
            }

        }
    }



    return {
        load: function($target){
            $target.each(function(idx, node){
                new load($(node));
            })
        }
    }

})();

$.fn.lazyload = function(){
    lazyLoad.load(this);
}

$('img').lazyload();