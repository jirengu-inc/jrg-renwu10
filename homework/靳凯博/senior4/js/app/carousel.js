define('app/carousel', ['jquery'], function ($) {
    var Show = (function () {
        function Carousel($ct) {
            this.$ct = $ct
            this.init()
            this.bind()
        }
        Carousel.prototype.init = function () {
            var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
                $imgLi = this.$imgLi = this.$ct.find('.img-ct>li'),
                $btnL = this.$btnL = this.$ct.find('.btn-left'),
                $btnR = this.$btnR = this.$ct.find('.btn-right'),
                $thumbnail = this.$thumbnail = this.$ct.find('.thumbnail>li');
            this.imgWidth = $imgLi.width();
            this.imgNum = $imgLi.length;
            $imgCt.append($imgLi.first().clone());
            $imgCt.prepend($imgLi.last().clone());
            $imgCt.width((this.imgNum + 2) * this.imgWidth);
            $imgCt.css({'left': -this.imgWidth});
            this.page = 0;
            this.isMove = false;
        }
        Carousel.prototype.bind = function () {
            var _this = this
            this.$btnL.on('click', function () {
                _this.playLeft(1)
            });
            this.$btnR.on('click', function () {
                _this.playRight(1);
            });
            this.$thumbnail.on('click', function () {
                var index = $(this).index();
                if (index > _this.page) {
                    _this.playRight(index - _this.page)
                } else if (index < _this.page) {
                    _this.playLeft(_this.page - index)
                }
            });
        }
        Carousel.prototype.playLeft = function (num,e) {
            //e.preventDefault()
            var _this = this
            if (this.isMove)return;
            this.isMove = true;
            this.$imgCt.animate({
                left: '+=' + (num * _this.imgWidth)
            }, function () {
                _this.page -= num;
                if (_this.page < 0) {
                    _this.page = _this.imgNum - 1;
                    _this.$imgCt.css({left: -_this.imgNum * _this.imgWidth});
                }
                _this.setThumbnail();
                _this.isMove = false;
            })
        }
        Carousel.prototype.playRight = function (num,e) {
            //e.preventDefault()
            var _this = this
            if (this.isMove)return;
            this.isMove = true;
            this.$imgCt.animate({
                left: '-=' + (num * _this.imgWidth)
            }, function () {
                _this.page += num;
                if (_this.page === _this.imgNum) {
                    _this.page = 0;
                    _this.$imgCt.css({left: 0 - _this.imgWidth});
                }
                _this.setThumbnail();
                _this.isMove = false;
            })
        }
        Carousel.prototype.setThumbnail = function () {
            this.$thumbnail.removeClass('active')
                .eq(this.page)
                .addClass('active');
        }
        return {
            init: function ($ct) {
                $ct.each(function (index, node) {
                    new Carousel($(node))
                })
            }
        }
    })()
    return Show
})
//Show.init($('.box'))
