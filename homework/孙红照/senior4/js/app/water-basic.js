define(["jquery"], function($){
	function WaterFall($node, $btn){
		this.$node = $node;
		this.$btn = $btn;
		this.init();
		this.render();
		this.ajaxInit();
	}
	WaterFall.prototype.init = function(){
		this.items = this.$node.children("li")
		this.nodeWidth = this.items.width();
		this.colNum = parseInt(this.$node.width()/this.nodeWidth);
		this.colSumHeight = [];
		for (var i=0;i<this.colNum;i++) {
			this.colSumHeight.push(0);
		}
	}
	WaterFall.prototype.render = function(){
		var _this = this
		this.$node.children("li").each(function(){
			var $cur = $(this),
				idx = 0,
				minSumHeight = _this.colSumHeight[0];
			for (var i=0;i<_this.colSumHeight.length;i++) {
				if (minSumHeight > _this.colSumHeight[i]) {
					minSumHeight = _this.colSumHeight[i];
					idx = i;
				}
			}
			// $cur.find("img").on("load", function(){
				$cur.css({
					left: _this.nodeWidth*idx,
					top: minSumHeight
				})
				_this.colSumHeight[idx] = _this.colSumHeight[idx] + $cur.outerHeight(true);
			// })
			
		})
		this.$node.height(Math.max.apply(null, this.colSumHeight))
	}
	WaterFall.prototype.ajaxInit = function(){
		var _this = this
		this.start = 0;
		this.length = 6;
		this.$btn.on("click", function(){
			_this.$btn.text('正在加载');
			_this.ajax();
		})
	}
	WaterFall.prototype.ajax = function(){
		var _this = this;
		$.ajax({
			url: "./php/index.php",
			method: "POST",
			data: {
				start: _this.start,
				length: _this.length
			}
		}).done(function(result){
			_this.$node.append(result);
			_this.init();
			_this.render();
			_this.start += _this.length;
			_this.$btn.text("加载更多");
		})

	}
	return WaterFall
})