define(['jquery'], function($) {

  function goTop(cla) {
    this.cla = cla || 'go-top';
    this.init();
  }

  goTop.prototype = {

    init: function() {
      var $el = $('.' + this.cla);
      if($el.length === 0) {
        this.$el = $('<div class="' + this.cla + '">回到顶部</div>');
        $('body').append(this.$el);
      } else {
        this.$el = $el;
      }
      this.$c = $(document);
      this.bind();
    },

    bind: function() {
      var self = this;
      this.$c.on('scroll', function() {
        self.scroll();
      });
      this.$el.on('click', function() {
        self.goToTop();
      });
    },

    goToTop: function() {
      this.$c.scrollTop(0);
    },

    scroll: function() {
      var scrollTop = this.$c.scrollTop();
      if(scrollTop > 100) {
        this.$el.show();
      } else {
        this.$el.hide();
      }
    }
  };

  return goTop;
});
