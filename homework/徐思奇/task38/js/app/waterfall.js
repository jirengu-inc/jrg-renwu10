var $ = require('jquery')

var Waterfall =(function(){
  function _Waterfall($ct){
    this.$ct = $ct
    this.init()
    this.bind()
    this.render()
  }

  _Waterfall.prototype.init = function(){
    this.$item = this.$ct.find('li')
    //得出一个li的宽度
    this.itemWidth = this.$item.outerWidth(true)
    //得出列数
    this.columns = parseInt(this.$ct.width()/this.itemWidth)
    //存储每一列高度
    this.itemArr = []
    for(var i = 0; i < this.columns; i++){
      this.itemArr[i] = 0//数组重置，归零
    }
  }
  _Waterfall.prototype.bind = function(){
    var _this = this
    $(window).resize(function(){
      _this.init()
      _this.render()
    })
  }
  _Waterfall.prototype.render = function(){
    var _this = this
    this.$item.each(function(){
      var minItem = Math.min.apply(null, _this.itemArr)//找到最小高度
      var minIndex = _this.itemArr.indexOf(minItem)//找出高度最小的那一列
      $(this).css({
        top: _this.itemArr[minIndex],
        left: $(this).outerWidth(true)*minIndex
      })
      
      _this.itemArr[minIndex] += $(this).outerHeight(true)//更新数组
      _this.$ct.height(Math.max.apply(null, _this.itemArr))
    })
  }

  return {
    init: function($ct){
      new _Waterfall($ct)
    }
  }
})()

module.exports = Waterfall
