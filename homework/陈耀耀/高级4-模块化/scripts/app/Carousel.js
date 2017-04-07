define(['jquery'], function($) {

    Carousel = function() {
        function Carousel($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
            this.autoPlay();
        }

        Carousel.prototype.init = function() {

            this.$img = this.$ct.find('.img');
            this.$imgCt = this.$ct.find('.img-ct');
            this.$btnPre = this.$ct.find('.btn-pre');
            this.$btnNxt = this.$ct.find('.btn-nxt');
            this.$bullet = this.$ct.find('.bullet');
            this.imgCount = this.$img.length;
            this.imgWidth = this.$img.width();
            this.pageIndex = 0;
            this.isAnimate = false;

            this.$img.width(this.imgWidth);
            this.$img.find('img').width(this.imgWidth);
            this.$imgCt.prepend(this.$img.eq(this.imgCount - 1).clone());
            this.$imgCt.append(this.$img.eq(0).clone());
            this.$imgCt.width(this.imgWidth * (this.imgCount + 2));
            this.$imgCt.css({
                left: -(this.imgWidth)
            })
        };

        Carousel.prototype.bind = function() {
            var _this = this;
            this.$btnPre.on('click', function(e) {
                e.preventDefault();
                _this.playPre();
            })
            this.$btnNxt.on('click', function(e) {
                e.preventDefault();
                _this.playNxt();
            })

            this.$bullet.find('li').on('click', function() {
                _this.playTo($(this).index());
            })
        };

        Carousel.prototype.stopAuto = function(e) {
            e.clearInterval(clock);
        }

        Carousel.prototype.autoPlay = function() {
            var _this = this;
            this.clock = setInterval(function() {
                _this.playNxt();
            }, 3000);
        }

        Carousel.prototype.playTo = function(n) {
            var _this = this;
            if (this.isAnimate === true) return;

            this.isAnimate = true;

            this.$imgCt.animate({
                left: '+=' + (_this.pageIndex - n) * _this.imgWidth
            }, function() {
                _this.pageIndex = n;
                _this.isAnimate = false;
                _this.setBullet();
            })
        }

        Carousel.prototype.playNxt = function() {
            var _this = this;
            if (this.isAnimate === true) return;

            this.isAnimate = true;

            this.$imgCt.animate({
                left: '-=' + this.imgWidth
            }, function() {
                _this.pageIndex++;
                if (_this.pageIndex === _this.imgCount) {
                    _this.$imgCt.css('left', -_this.imgWidth);
                    _this.pageIndex = 0;
                }
                _this.isAnimate = false;
                _this.setBullet();
            })
        }

        Carousel.prototype.playPre = function() {
            var _this = this;
            if (this.isAnimate === true) return;

            this.isAnimate = true;

            this.$imgCt.animate({
                left: '+=' + this.imgWidth
            }, function() {
                _this.pageIndex--;
                if (_this.pageIndex < 0) {
                    _this.$imgCt.css('left', -(_this.imgCount * _this.imgWidth));
                    _this.pageIndex = _this.imgCount - 1;
                }
                _this.isAnimate = false;
                _this.setBullet();
            })
        }

        Carousel.prototype.setBullet = function() {
            this.$bullet.children().removeClass('active').eq(this.pageIndex).addClass('active')
        }
        return {
            init: function($ct) {
                $ct.each(function(index, node) {
                    new Carousel($(node))
                })
            }
        }
    }()
    return Carousel;
})