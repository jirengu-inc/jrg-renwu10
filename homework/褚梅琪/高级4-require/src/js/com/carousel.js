/**
 * car
 * @authors Maggie (meiqichu@jirengu.com)
 * @date    2017-1-23 17:21:54
 * @version $Id$
 */


define(function(require, exports) {
	var $ = require('jquery');

	// var Event = require('com/event');   //这是CMD的写法
	// console.log(Event);

	var Carousel = (function() {

		var carouselList = [];


		function init($carousel) {
			$carousel.each(function() {
				var $cal = $(this);
				if ($cal.hasClass('init')) {
					return;
				}
				carouselList.push(new _Carousel($cal));
				$cal.addClass('init');
			});

		}

		function getList() {
			return carouselList;
		}

		function _Carousel($carousel) {
			this.$carousel = $carousel;
			
			this.start();
			this.setBg(1);
			this.setBg(4);
			this.bind();
			this.autoPlay();
		}

		_Carousel.prototype = {

			start: function(){
				var $carousel = this.$carousel,
				    $imgCt = this.$imgCt = $carousel.find('.img-ct'),
				    $items =	this.$items = $imgCt.children('.items');
						this.$pre = $carousel.find('.pre');
						this.$next = $carousel.find('.next');
						this.$bullet = $carousel.find('.bullet');
						this.imgWidth = $(window).width();
						this.imgLength = $imgCt.find('li').size();

						this.curPageIndex = 0;
						this.isAnimate = false;

						$imgCt.append( $items.first().clone() );
			      $imgCt.prepend( $items.last().clone() );
			      $imgCt.children().width(this.imgWidth);
			  var realImgCount = $imgCt.children().length;
			      $imgCt.width(realImgCount*this.imgWidth);
			      $imgCt.css({left:0-this.imgWidth});

			      
			},

			bind: function() {
				var _this = this;
				this.$pre.on('click', function(e) {
					e.preventDefault();
					_this.playPre();
				});
				this.$next.on('click', function(e) {
					e.preventDefault();
					_this.playNext();
				});
				this.$bullet.on('click','li',function(e){
		      var idx = $(this).index();
		        if(idx>_this.curPageIndex){
		            _this.playNext(idx-_this.curPageIndex);
		        }else if (idx<_this.curPageIndex) {
		            _this.playPre(_this.curPageIndex-idx);
		        }
		    })
			},

			setBg: function(idx){
				var idx = idx || 0,
		 				$node = this.$imgCt.children().eq(idx),

		 				$cover = $node.find('.cover'),
		 				imgUrl = $cover.attr('data-img');
		 		if($node.data('isBgSet')) return;
		 		$cover.css('background-image','url('+imgUrl+')');
		 		$node.data('isBgSet',true);
			},

			playPre: function(idx) {
				var _this = this,
		        idx = idx || 1;
		    if(this.isAnimate) return;
		    this.isAnimate = true;
		    this.setBg( this.curPageIndex-idx+1 );
		    this.$imgCt.animate({
		        left:'+='+this.imgWidth*idx
		    },function(){
		        _this.curPageIndex = (_this.imgLength+_this.curPageIndex-idx)%_this.imgLength;
		        _this.setBullet();
		        if(_this.curPageIndex === _this.imgLength-1){
		            _this.$imgCt.css({left:0-_this.imgWidth*_this.imgLength});
		        }
		    });
    		this.isAnimate = false;
			},

			playNext: function(idx) {
				var _this = this,
		        idx = idx || 1;
		    if(this.isAnimate) return;
		    this.isAnimate = true;
		    this.setBg(idx+this.curPageIndex+1);
		    this.$imgCt.animate({
		        left:'-='+this.imgWidth*idx
		    },function(){
		        _this.curPageIndex = (_this.curPageIndex+idx)%_this.imgLength;
		        _this.setBullet();
		        if(_this.curPageIndex === 0){
		            _this.$imgCt.css({left:0-_this.imgWidth});
		        }
		    });
		    this.isAnimate = false;
			},

			setBullet: function(){
				this.$bullet.children().removeClass('active')
        		.eq(this.curPageIndex).addClass('active')
			},

			autoPlay: function(){
				var me = this;
				this.clock = setInterval( function(){
					me.playNext();
				}, 3000 );
			},

			stopPlay: function(){
				clearInterval(this.clock);
			}
		};


		return {
			init: init,
			getList: getList
		};

	})();


	return Carousel;
});