var $ = require("jquery");
  var Carousel = (function() {

    var carouselList = [];

    function init($carousel) {
      $carousel.each(function() {
        var $cal = $(this);
        if($cal.hasClass('init')) {
          return;
        } else {
          carouselList.push(new _Carousel($cal));
          $cal.addClass('init');
        }
      });
    }

    function getList() {
      return carouselList;
    }

    function _Carousel($carousel) {
      var $carousel = this.$carousel = $carousel;
      var $ct = this.$ct = $carousel.find('.img-ct');
      var $items = this.$items = $ct.children();
      this.$pre = $carousel.find('.pre');
      this.$next = $carousel.find('.next');
      this.$bullet = $carousel.find('.bullet');
      this.imgWidth = $(window).width();
      this.imgCount = $items.length;
      this.clock = '';
      this.curIdx = 0;
      this.isAnimate = false;

      this.setCt();
      this.setBg(1);
      this.autoPlay();
    }

    _Carousel.prototype = {

      setCt: function() {
        var $ct = this.$ct;
        $ct.prepend(this.$items.last().clone());
        $ct.append(this.$items.first().clone());
        $ct.find('.item').css('width', this.imgWidth);
        $ct.find('.cover').css('width', this.imgWidth);
        var imgRealCount = $ct.children().length;
        $ct.css({
          'left': 0 - this.imgWidth,
          'width': imgRealCount * this.imgWidth
        });
        this.bind();
      },

      bind: function() {
        var _this = this;
        this.$pre.on('click', function() {
          _this.playPre();
        });
        this.$next.on('click', function() {
          _this.playNext();
        });
        this.$bullet.on('click', 'li', function() {
          var bulletIdx = $(this).index();
          if(bulletIdx > _this.curIdx) {
            playNext(bulletIdx - _this.curIdx);
          } else if(bulletIdx < _this.curIdx) {
            playPre(_this.curIdx - bulletIdx);
          }
        });
      },

      playPre: function(idx) {
        var idx = idx || 1;
        var _this = this;
        var imgCount = this.imgCount;
        if(!this.isAnimate) {
          this.isAnimate = true;
          this.setBg(this.curIdx);
          this.$ct.animate({left: '+=' + (this.imgWidth * idx)}, function() {
            _this.curIdx = (_this.curIdx - idx + imgCount) % imgCount;
            if(_this.curIdx === (imgCount - 1)) {
              _this.$ct.css({'left': 0 - imgCount * _this.imgWidth});
            }
            _this.isAnimate = false;
            _this.setBullet();
          });
        }
      },

      playNext: function(idx) {
        var idx = idx || 1;
        var _this = this;
        var imgCount = this.imgCount;
        if(!this.isAnimate) {
          this.isAnimate = true;
          this.setBg(this.curIdx + 2);
          this.$ct.animate({left: '-=' + (this.imgWidth * idx)}, function() {
            _this.curIdx = (_this.curIdx + idx) % imgCount;
            if(_this.curIdx === 0) {
              _this.$ct.css({'left': 0 - _this.imgWidth});
            }
            _this.isAnimate = false;
            _this.setBullet();
          });
        }
      },

      setBullet: function() {
        this.$bullet.find('li').removeClass('active')
                               .eq(this.curIdx).addClass('active');
      },

      setBg: function(idx) {
        var idx = idx || 0,
            $node = this.$ct.children().eq(idx),     // 用$items.eq(idx)就不会显示第一张图片
            $cover = $node.find('.cover'),
            imgUrl = $cover.attr('data-bd-img');
        if($node.data('isBdSet')) {
          return;
        } else {
          $cover.css('background-image', 'url(' + imgUrl + ')');
          $node.data('isBdSet', true);
        }
      },

      autoPlay: function() {
        var _this = this;
        this.clock = setInterval(function() {
          _this.playNext();
        }, 3000);
      },

      stopAuto: function() {
        clearInterval(this.clock);
      }
    };

    return {
      init: init,
      getList: getList
    }
  })();
  module.exports = Carousel;
