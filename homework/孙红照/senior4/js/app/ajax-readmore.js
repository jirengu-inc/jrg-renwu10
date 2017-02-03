define(["jquery"], function($){
	function Readmore($node, $box){
		this.$node = $node;
		this.$box = $box;
		this.init();
	}
	Readmore.prototype.init = function(){
		var _this = this
		this.start = 0;
		this.length = 6;
		this.$node.on("click", function(){
			_this.$node.text('正在加载');
			_this.ajax();
		})
	}
	Readmore.prototype.ajax = function(){
		var _this = this;
		$.ajax({
			url: "./php/index.php",
			method: "POST",
			data: {
				start: _this.start,
				length: _this.length
			}
		}).done(function(result){
			_this.$box.append(result);
			_this.$node.text("加载更多");
		})
	}
	return Readmore
})



