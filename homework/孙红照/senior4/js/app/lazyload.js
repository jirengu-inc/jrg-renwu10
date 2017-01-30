define(["jquery"], function($){
	function LazyLoad($node){
			this.$node = $node||$("body").find("img");
			this.init();
			this.bind();
			this.checkAndShow(this.$node);
		}


		LazyLoad.prototype.init = function(){
			this.isShow = false;
		}


		LazyLoad.prototype.bind = function(){
			var _this = this,
				clock;
			$(window).on("scroll", function(){
				if(clock) {
					clearTimeout(clock);
				}
				if(_this.isShow){
					return;
				}
				clock = setTimeout(function(){
					_this.checkAndShow(_this.$node)
				})
			})
		}


		LazyLoad.prototype.checkAndShow = function($node){
			var _this = this;
			$node.each(function(){
				var winH = $(window).height(),
					scrollH = $(window).scrollTop(),
					offsetH = $(this).offset().top;

				if(offsetH < winH + scrollH){
					_this.show($(this));
				}
			})
		}


		LazyLoad.prototype.show = function($node){
			var addr = $node.attr("data-src");			
			setTimeout(function(){
				$node.attr("src", addr);
				this.isShow = true;
			},0);
		}

		return LazyLoad
})