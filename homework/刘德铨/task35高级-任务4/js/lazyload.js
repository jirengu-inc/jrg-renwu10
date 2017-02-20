
var lazyLoad = (function(){
    function load($target, callback){
        this.$target = $target;
        this.callback = callback;
        this.bind();
    }

    load.prototype = {
        bind: function(){
            var _this = this;
            $(window).on('scroll', function(){
                _this.check(_this.$target);
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
        },

        check: function($target){
            if(this.isShow(this.$target) && !$target[0].classList.contains('load')){
                this.callback($target);
            }     
        }
    }

    return {
        load: function($target, callback){
            $target.each(function(idx, node){
                new load($(node), callback);
            })
            
        }

    }

})();

$.fn.lazyload = function(callback){
    lazyLoad.load(this, callback);
}

$('img').lazyload(function($target){ 
    if($target.attr('data-src')) {
       console.log($target.attr('data-src'));
       var imgUrl = $target.attr('data-src');
       $target.attr('src', imgUrl);
       $target[0].classList.add('load');
    }
});