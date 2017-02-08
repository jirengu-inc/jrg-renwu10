var $ = require("jquery");

	function Exposure($node) {
		this.$node = $node;
		this.clock = false;
		this.init();
	}

	Exposure.prototype = {

		init: function() {
			this.bind();
		},

		bind: function() {
			var that = this;
			$(window).on('scroll', function() {
				if(that.clock) {
					clearTimeout(that.clock);
				}
				that.clock = setTimeout(function() {
					that.checkShow();
				}, 200);
			});
		},

		checkShow: function() {
			var that = this;
			this.$node.each(function() {
				var $cur = $(this);
				if($cur.data('isLoading')) {
					return;
				}
				if(that.isShow($cur)) {
					that.exposure($cur);
				}
			})
		},

		isShow: function($node) {
			var winH = $(window).height(),
					scrollH = $(window).scrollTop(),
					top = $node.offset().top;
			return (top < winH + scrollH) ? true : false;
		},

		exposure: function($node) {
			$node.animate({opacity: 1}, 1000);
		}
	};

	module.exports =  Exposure;
