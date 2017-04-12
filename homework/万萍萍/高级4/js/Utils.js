/**
 * 工具类
 */

//--------------轮播 ------------------------------------------------
/**
 *  @$ct 放图片的容器
 *  @$img 图片集合（类数组对象）
 *  @$indexItemCt 放点的容器
 *  @$indexItems 下面显示第几页的点集合（类数组对象）
 *  @choose 需要calss (下面显示第几页的点的选中样式)
 * */
var Carousel = function ($imgCt, $imgArr, $indexItemCt, $indexItems, clsName) {
    this.$imgCt = $imgCt;
    this.$imgArr = $imgArr;
    this.$indexItemCt = $indexItemCt;
    this.$indexItems = $indexItems;
    this.clsName = clsName;

    this.curIndex = 0;
    this.index = 0;
    this.$imgW = this.$imgArr.eq(0).width();
    this.scrollW = 0; //需滚动的距离
    this.timerId; //定时器id

    this.start(); //启动计时器
    this.bind();
}
Carousel.prototype.start = function () {
    this.addTimer();
}
Carousel.prototype.addTimer = function () {
    if(this.timerId > 0)clearTimeout(this.timerId);
    this.timerId = setInterval(this.autoPlay, 3000);
}
//自动播放下一页
Carousel.prototype.autoPlay = function () {
    Carousel.prototype.playNext();
}
//下一页
Carousel.prototype.playNext = function () {
    this.index ++;
    if(this.index > this.$imgArr.length - 1)this.index = 0;
    this.changePage(this.index);
}
//上一页
Carousel.prototype.playPre = function () {
    this.index --;
    if(this.index < 0)this.index = this.$imgArr.length - 1;
    this.changePage(this.index);
}
//跳转到某页
Carousel.prototype.changePage = function (page) {
    if(page === this.curIndex)return;

    this.$indexItems.eq(page).addClass(this.clsName).siblings().removeClass(this.clsName);

    if(page > this.curIndex) { //往左边滚
        this.scrollW -= this.$imgW * (page - this.curIndex);
    }else{ //往右边滚
        this.scrollW += this.$imgW * (this.curIndex - page);
    }
    console.log(this.scrollW);
    this.$imgCt.animate({left: this.scrollW});

    this.curIndex = page;
    this.index = this.curIndex;
}
//事件绑定
Carousel.prototype.bind = function () {
    var _this = this;
    this.$indexItemCt.on('click', function(e){
        if(e.target.tagName === 'LI'){
            clearInterval(_this.timerId); //点击时清除自动播放
            _this.timerId = 0;
            _this.changePage($(e.target).index());

            _this.timerId = setTimeout(_this.addTimer, 3000); //3秒之后启动自动播放
        }
    });
}


//--------------   瀑布流 --------------------------------------------------
function Exposure($target, callback){
    this.$target = $target;
    this.callback = callback;
    this.bind();
    this.check();
}

Exposure.prototype.bind = function(){
    var _this = this;
    $(window).on('scroll', function(){
        _this.check();
    })
};

Exposure.prototype.check = function(){
    if(this.isShow(this.$target)){
        this.callback(this.$target);
    }
};

Exposure.prototype.isShow = function(){
    var windowHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        offsetTop = this.$target.offset().top,
        nodeHeight = this.$target.height();
    if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
        return true;
    }else{
        return false;
    }
};

var Lazy = (function(){
    return {
        init: function($targets, callback){
            $targets.each(function(idx, target){
                new Exposure($(target), callback);
            })

        },
        one: function($targets, callback){

        }
    }
})();

//---------------回到顶部------------------------------------------------
function addToTOP($target){
    this.$target = $target;
    this.$target.hide();
    this.bind();
}

addToTOP.prototype.bind = function(){
    var _this = this;
    var isOnBack = false;
    $(window).on('scroll', function(){
        // console.log($(window).scrollTop());
       if($(window).scrollTop() > 100){
           if(!isOnBack)_this.$target.fadeIn();
       }else{
           _this.$target.fadeOut();
       }
    })

    _this.$target.click(function () {
        isOnBack = true;
        $('body,html').animate({scrollTop: 0}, 500, function () {
            isOnBack = false;
        });
        _this.$target.hide();
    });

};