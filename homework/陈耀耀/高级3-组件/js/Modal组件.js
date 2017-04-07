
Modal = function(){
	function Modal($ct){
		this.$ct = $ct;
		this.init();
		this.bind();
	}

	Modal.prototype.init = function(){{
		var $btn = this.$btn = this.$ct.find('.btn'),
			$modalMain =this.$modalMain = this.$ct.find('.modal-main'),
			$close = this.$close = this.$ct.find('.close'),
			$cover = this.$cover =this.$ct.find('.cover');
	}};
	Modal.prototype.bind = function(){
		var _this = this;
		this.$btn.on('click', function(){
			_this.$modalMain.show();
		});
		this.$close.on('click', function(){
				_this.$modalMain.hide();
		});
		this.$cover.on('click', function(){
				_this.$modalMain.hide();
		});
	};
	return{
		init: function($ct){
			$ct.each(function(index, node){
				new Modal($(node))
			})
		}
	}
}()

Modal.init($('.modal'))



