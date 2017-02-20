
var carouselView = (function(){
    function Carousel($target){
        this.$target = $target;
        this.$imgCt = $target.find('.img-ct');
        this.$imgCtLi = this.$imgCt.find('li');
        this.$bulletCt = $target.find('.bullet-ct');
        this.$bullet = $target.find('.bullet');
        this.$bulletLi = this.$bullet.find('li');

        this.imgWidth = $(window).width();
        this.imgLength = this.$imgCtLi.length;
        this.curIdx = 0;
        this.animate = false;

        this.bind();
    }

    Carousel.prototype = {
        init: function(){

        },

        bind: function(){
            var _this = this;
            /*console.log(_this.$target);
            console.log(_this.$imgCt);*/
            console.log('this.imgLength: ' , this.imgLength);
            this.autoplay();
        },

        autoplay: function(){
            var _this = this;
            this.intervalPlay = setInterval(function(){
                _this.play(_this.curIdx + 1);
            },3000*100000);
        },

        play: function(index){
            var _this = this;
            if(this.curIdx === index || this.animate){
                return;
            }
            this.animate = true;
            this.$imgCt.animate({
                left: '+=' + (this.curIdx - index) * this.imgWidth
            }, function(){
                _this.curIdx = index;
                if(index === _this.imgLength) {
                    _this.$imgCt.css({
                        //left: - _this.imgWidth
                        left: 0
                    });
                    _this.curIdx = 0;
                }
                else if(index === -1) {
                    _this.$imgCt.css({
                        //left: - _this.imgWidth * _this.imgLength
                        left: - _this.imgWidth * ( _this.imgLength - 1)
                    })
                    _this.curIdx = _this.imgLength - 1;
                }
                _this.animate = false;
                _this.setBullet();

            })
        },

        setBullet: function(){
            this.$bulletLi.removeClass('active')
                          .eq(this.curIdx)
                          .addClass('active');
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