define(['jquery'], function($) {

  function Waterfall($node) {
    this.$node = $node;
    this.init();
  }
  Waterfall.prototype = {
    init: function() {
      this.render(this.$node);
      this.bind(this.$node);
    },
    bind: function($node) {
      var that = this;
      $(window).on('resize', function() {
        that.render($node);
      });
    },
    render: function($node) {
      var ctWidth = $node.find('.portfolio-wrap').width();
      var $item = $node.find('.portfolio-wrap li');
      var itemWidth = $item.outerWidth(true);
      var colNum = parseInt(ctWidth / itemWidth);
      var colSumHeight = [];

      for(var i = 0; i < colNum; i++) {
        colSumHeight.push(0);
      }
      $item.each(function() {
        var $cur = $(this);
        var idx = 0,
            minSumHeight = colSumHeight[idx];
        for(var j = 0; j < colSumHeight.length; j++) {
          if(colSumHeight[j] < minSumHeight) {
            idx = j;
            minSumHeight = colSumHeight[idx];
          }
        }
        $cur.css({
          top: minSumHeight,
          left: itemWidth * idx,
          opacity: 1
        });
        colSumHeight[idx] += $cur.outerHeight(true);
      });
      $node.find('.portfolio-wrap').css({height: Math.max.apply(null, colSumHeight)});
    }
  };

  return Waterfall;
});
