var $ = require("jquery");
function Carousel($node){
	this.$node = $node;
	this.init();
	this.bind();
	this.autoMove();
}


Carousel.prototype.init = function(){
	this.$pic = this.$node.find(".pic");
	this.$picCt = this.$node.find(".pic-ct");
	this.$leftArrow = this.$node.find(".left-arrow");
	this.$rightArrow = this.$node.find(".right-arrow");
	this.$page = this.$node.find(".page-ct>li");
	this.imgCount = this.$pic.length;
	this.imgWidth = this.$pic.width();
	this.isMoving = false;
	this.curImg = 0;

	this.$pic.width(this.imgWidth);
	this.$pic.find("img").width(this.imgWidth);
	this.$picCt.prepend(this.$pic.eq(this.imgCount-1).clone())
	this.$picCt.append(this.$pic.eq(0).clone());
	this.$picCt.width(this.imgWidth * (this.imgCount+2));
	this.$picCt.css({
		left: -(this.imgWidth)
	});
}


Carousel.prototype.bind = function(){
	var _this = this
	
	this.$leftArrow.on("click", function(){
		_this.move(-1);
	});

	this.$rightArrow.on("click", function(){
		_this.move(1);
	});

	this.$page.on("click", function(){
		var idx = $(this).index();
		_this.move(idx - _this.curImg);
	})
}


Carousel.prototype.move = function(num){
	if (this.isMoving) {
		return 
	}
	this.isMoving = true;
	var _this = this;
	this.$picCt.animate({
		left: ("-=" + num*this.imgWidth)
	}, function(){
		_this.curImg += num;
		if (_this.curImg === _this.imgCount) {
			_this.$picCt.css({
				left: -(_this.imgWidth),
			});
			_this.curImg = 0;
		}
		if (_this.curImg === -1) {
			console.log(_this.imgWidth*_this.imgCount);
			_this.$picCt.css("left", -(_this.imgWidth*_this.imgCount));
			_this.curImg = 3;
		}
		_this.changePage(_this.curImg)
		_this.isMoving = false;
	});
	
}


Carousel.prototype.changePage = function(num){
	this.$page.removeClass("active");
	this.$page.eq(num).addClass("active");
}


Carousel.prototype.autoMove = function(){
	var _this = this
	setInterval(function(){
		_this.move(1)
	}, 4000);
}
module.exports = Carousel;