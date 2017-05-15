define(['jquery'], function($){
	var goTop = (function(){
		function _GoTop($ele, top){
			this.$ele = $ele
			this.top = top
			this.$btn = $("<a class='gotop' href='javascipt:;' style='display: none'>GoTop</a>")
			this.$ele.append(this.$btn)
			this.bind()
		}
		_GoTop.prototype.bind = function(){
			var _this = this
			$(window).on('scroll', function(){
				if($(window).scrollTop() > _this.top){
					_this.$btn.fadeIn('slow')
				}else{
					_this.$btn.fadeOut('slow')
				}
			})

			this.$btn.on('click', function(){
				_this.$ele.animate({
					scrollTop: 0
				}, 500)
			})
		}

		return {
			init: function($ele, top){
				new _GoTop($ele, top)
			}
		}
	})()
	return goTop
})

//goTop.init($('body'), 500)