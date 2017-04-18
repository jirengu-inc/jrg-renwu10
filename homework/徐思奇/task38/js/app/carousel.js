var $ = require('jquery')

var Carousel = (function(){
  function _Carousel($ct){
    this.$ct = $ct
    this.init()
    this.bind()
    this.autoPlay()
  }

  _Carousel.prototype.init = function(){
    var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
        $bullet = this.$bullet = this.$ct.find('.btn-bullet'),
        $btn = this.$btn = this.$ct.find('.btn'),
        clock = this.clock

    var $firstImg = this.$firstImg = $imgCt.find('li').first()
    var $lastImg = this.$lastImg = $imgCt.find('li').last()

    this.isAnimate = false//动画状态锁 防止重复连续点击产生动画反应滞后的问题
    this.pageIndex = 0
    // this.imgWidth = $firstImg.width()
    this.imgWidth = $('body').width()//适用于大尺寸图片的全屏轮播(1)
    this.$imgCt.find('li').width(this.imgWidth)//适用于大尺寸图片的全屏轮播(2)
    this.imgLength = $imgCt.children().length //在克隆之前计数

    //克隆第一个和最后一个li，为了更加明显，在HTML中增加自定义属性data-index
    $imgCt.prepend($lastImg.clone())
    $imgCt.append($firstImg.clone())

    //随着li数量的变化，自动更改$imgCt的宽度
    $imgCt.width(this.imgWidth*$imgCt.children().length)

    //使默认状态下页面显示第一张图片，如果直接在CSS中修改，快速刷新页面就会出现跳动
    $imgCt.css('left', -this.imgWidth)
  }

  _Carousel.prototype.bind = function(){
    var _this = this
    this.$btn.on('click', function(){
      _this.stopPlay()
      if($(this).hasClass('btn-pre')){
        _this.playPre()
      }else if($(this).hasClass('btn-next')){
        _this.playNext()
      }
      _this.autoPlay()
    })

    //点击bullet中按钮切换图片
    this.$bullet.on('click', 'li', function(){
      _this.stopPlay()
      var curIndex = $(this).index()
      var step = curIndex - _this.pageIndex
      if(curIndex > _this.pageIndex){
        _this.playNext(step)
      }else if(curIndex < _this.pageIndex){ //若不加else if条件则会出现重复点击同一个按钮产生错位
        _this.playPre(-step)
      }
      _this.autoPlay()
    })
  }

  _Carousel.prototype.playNext = function(n){
    //右向按钮，传入参数n，表示需要移动的图片的张数，为了配合下面的bullet按钮使用
    var _this = this
    if(this.isAnimate) return
    this.isAnimate = true//上锁
  
    var n = n || 1 //如果n存在直接取n否则取1
    this.$imgCt.animate({
      left: '-='+this.imgWidth*n
    },function(){
      _this.pageIndex = _this.pageIndex + n
      if(_this.pageIndex === _this.imgLength){
        _this.$imgCt.css('left', -_this.imgWidth)
        _this.pageIndex = 0
      }
      _this.bullet()
      _this.isAnimate = false
    })
  }

  _Carousel.prototype.playPre = function(n){
    //左向按钮
    var _this = this
    if(this.isAnimate) return
    this.isAnimate = true

    var n = n || 1
    this.$imgCt.animate({
      left: '+='+this.imgWidth*n
    },function(){
      _this.pageIndex = _this.pageIndex - n
      if(_this.pageIndex < 0){
        _this.$imgCt.css('left', -_this.imgWidth*_this.imgLength)
        _this.pageIndex = _this.imgLength-1
      }
      _this.bullet()
      _this.isAnimate = false
    })
  }

  _Carousel.prototype.bullet = function(){
    //随着图片变化而变化,同步
    this.$bullet.children().removeClass('active').eq(this.pageIndex).addClass('active')
  }

  _Carousel.prototype.autoPlay = function(){
    var _this = this
    _this.clock = setInterval(function(){
      _this.playNext()
    }, 3000) 
  }

  _Carousel.prototype.stopPlay = function(){
    //防止自动播放与其他事件产生冲突
    var _this = this
    clearInterval(_this.clock)
  }

  //由于直接new还是会暴露出对象的属性和方法，可以把构造函数和原型放在一个闭包里面。
  //通过返回一个外部可以调用的接口来实现轮播，保密性更好
  return {
    init: function($ct){
      $ct.each(function(index, node){
        //注意each里面的node是原生dom元素，需要用$(node)包裹才是jq元素
        new _Carousel($(node))
      })
    }
  }
})()

module.exports = Carousel


// Carousel.init($('.carousel'))
