
var carouselView = (function(){
    function Carousel($target){
        this.$target = $target;
        this.$imgCt = $target.find('.img-ct');
        this.bind();
    }

    Carousel.prototype = {
        bind: function(){
            var _this = this;
            console.log(_this.$target);
            console.log(_this.$imgCt);
        }
    }
    

    return {
        roll: function($target){
            $target.each(function(idx, node){
                new Carousel($(node));
            })
        }
    }
})();

$.fn.carousel = function(){
    carouselView.roll(this);
}

$('.carousel').carousel();