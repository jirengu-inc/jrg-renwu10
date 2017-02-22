
var carouselView = (function(){
    function Carousel($target){
        this.$target = $target;
        this.$imgCt = $target.find('.img-ct');
        this.$imgCtLi = this.$imgCt.find('li');
        this.$bag = this.$imgCtLi.find('.bag')
        this.$bulletCt = $target.find('.bullet-ct');
        this.$bullet = $target.find('.bullet');
        this.$bulletLi = this.$bullet.find('li');

        
        this.init();
        this.bind();
    }

    Carousel.prototype = {
        init: function(){
            this.imgWidth = $(window).width();       
            this.imgNum = this.$imgCtLi.length;
            this.curIdx = 0;
            this.animate = false;

            this.$imgCtLi.css({
                width: this.imgWidth
            });
            this.$bag.css({
                width: this.imgWidth
            });
            this.setBag(this.curIdx);
            this.$imgCt.prepend(this.$imgCtLi.last().clone());
            this.$imgCt.append(this.$imgCtLi.first().clone());
            this.$imgCt.css({
                width: this.imgWidth * this.$imgCt.children().length ,
                left: - this.imgWidth
            });

            



        },


        bind: function(){
            var _this = this; 
            this.autoplay();
            this.bullet();
        },

        autoplay: function(){
            var _this = this;
            this.intervalPlay = setInterval(function(){
                _this.play(_this.curIdx + 1);
            },5000);
        },

        bullet: function(){
            var _this = this;
            this.$bulletLi.on('click', function(){
                _this.play($(this).index());
                console.log($(this).index());
            })
        },

        play: function(index){
          //  console.log(index);
            var _this = this;
            if(this.curIdx === index || this.animate){
                return;
            }
            this.animate = true;
            this.setBag(index);
            this.$imgCt.animate({
                left: '+=' + (this.curIdx - index) * this.imgWidth
            }, 2000, function(){
                _this.curIdx = index;
                if(index === _this.imgNum) {
                    console.log(index);
                    _this.$imgCt.css({
                        left: - _this.imgWidth
                    });
                    _this.curIdx = 0;
                }
                else if(index === -1) {
                    console.log(index);
                    _this.$imgCt.css({
                        left: - _this.imgWidth * _this.imgNum
                    })
                    _this.curIdx = _this.imgNum - 1;
                }
                _this.animate = false;
                _this.setBullet();
            })
        },

        setBullet: function(){
            this.$bulletLi.removeClass('active')
                          .eq(this.curIdx)
                          .addClass('active');
        },

        setBag: function(idx){
            this.$node = this.$imgCtLi.eq(idx).find('.bag'); 
            if(this.$node.data('load')){
                return;
            }
            this.$node.css({
                backgroundImage: 'url(' + this.$node.attr('data-url') + ')'
            });
            this.$node.data('load', true);
            
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