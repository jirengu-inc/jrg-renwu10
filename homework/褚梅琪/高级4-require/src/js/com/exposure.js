/**
 * 
 */

define(function(require) {

	var $ = require('jquery');

	var Exposure = (function() {
		var _queue = [];
		var _isBind = false;

		function one($selectors, callback) {
			_add('one' ,$selectors, callback);
			_init();
		}

		function every($selectors, onenter, onleave) {
			_add('every' ,$selectors, callback);
			_init();
		}

		function _add(type, $selector, callback) {
			$selector.each(function() {
				$cur = $(this);
				var o = {
					type: type,
					el: $cur,
					cb: callback || function() {}
				};
				_queue.push(o);
			});
		}

		function _init() {
			if (!_isBind) {
				_bind();
			}
			_do();
		}

		function _bind() {

			var timer = null,
				interval = 40;

			$(window).on('scroll', function(e) {
				timer && clearTimeout(timer);
				timer = setTimeout(function() {
					_do();
				}, interval);
			});

			_isBind = true;
		}

		function _do() {

			var arrTmp = [];
			for (var i = 0; i < _queue.length; i++) {
				var item = _queue[i];
				if (_isShow(item.el)) {
					item.cb.call(item.el[0]);
					if(item.type === 'every'){
						arrTmp.push(item);
					}
				} else {
					arrTmp.push(item);
				}
			}

			_queue = arrTmp;
		}

		function _isSee($el) {
			
		}
		function _isShow($el) {
			var scrollH = $(document).scrollTop(),
				winH = $(window).height(),
				top = $el.offset().top;
			return (top < winH + scrollH) ? true : false;
		}

		return {
			one: one,
			every: every
		}
	})();

	return Exposure;

});



// Exposure.one($imgs, function(){
//   showImg($(this));
// });