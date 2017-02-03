/**
 *
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-21 17:46:07
 * @version $Id$
 */

define(['jquery'], function( $ ) {


	function goTop(id) {
		this.id = id || 'gotop';
		this.init();
	}

	goTop.prototype = {
		init: function() {
			var $el = $('#' + this.id);
			if ($el.length === 0) {
				console.log('回到顶部');
				this.$el = $('<div id="' + this.id + '" style="position: fixed; right: 10px; bottom: 10px; ">回到顶部</div>');
				$('body').append(this.$el);
			} else {
				this.$el = $el;
			}
			this.$c = $(document);

			this.bind();
		},

		bind: function() {
			var me = this;

			this.$el.on('click', function() {
				me.goToTop();
			});

			this.$c.on('scroll', function(){
				me.scroll();
			});
		},

		goToTop: function() {
			this.$c.scrollTop(0);
		},

		scroll: function(e) {
			var scrollTop = this.$c.scrollTop();
			if (scrollTop > 200) {
				this.$el.show();
			} else {
				this.$el.hide();
			}
		}
	};

	//new goTop();


	return goTop; 
});