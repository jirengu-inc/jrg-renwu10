define(['jquery'],function($){
	
	var WaterFall = (function() {

		var waterFallList = [];


		function init($waterfall) {  //$waterfall 为ul
			$waterfall.each(function() {
				var $cal = $(this);
				if ($cal.hasClass('init')) {
					return;
				}
				waterFallList.push(new _WaterFall($cal)); //$cal 为ul
				$cal.addClass('init');
			});

		}

		function getList() {
			return waterFallList;
		}

		function _WaterFall($waterfall){
			this.$waterfall = $waterfall;              //$waterfall为ul

			this.start();
			this.bind();
		}

		_WaterFall.prototype = {

			colSumHeight: [],

			start: function(){
				var $waterfall = this.$waterfall,       //$waterfall为ul
						$items = this.$items = $waterfall.children(),
						nodeWidth = this.nodeWidth = $items.outerWidth(true),
						colNum = this.colNum = parseInt( $waterfall.outerWidth(true)/nodeWidth );
						for(var i=0;i<colNum;i++){
							this.colSumHeight.push(0);
							
						}

				this.curPage = 0;
				this.perPageCount = 12;
				this.loadAndPlace();
			},

			bind: function(){
				var _this = this;
				$('.load-more').on('click',function(e){
					e.preventDefault();
					_this.loadAndPlace();
				})
			},

			loadAndPlace: function(){
				var _this = this,
						curPage = this.curPage,
						perPageCount = this.perPageCount;
						console.log('curpage',this.curPage);
						console.log('perPageCount',this.perPageCount);
				$.get('/hello', {curPage:curPage, perPageCount: perPageCount})
	  	  .done(function(ret){
	  	  	console.log(ret.data);
	  	  	if(ret && ret.status.code === '0'){
	  	  		_this.place(ret.data);
	  	  		_this.curPage += 1;
	  	  		if(_this.perPageCount ===6 ) return;
	  	  		_this.perPageCount = 6;
	  	  	}
	  	  }).fail(function(){
	  	  	console.log('error');
	  	  });
			},

			place: function(nodeList){
				var $nodes = this.renderData(nodeList), //节点生成后添加到页面上
				    _this = this;

				var defereds = []; //创建存储 defered 对象的数组
				$nodes.find('img').each(function(){
					var defer = $.Deferred();
					$(this).load(function(){
						defer.resolve();
					}); //当每个图片加载完成后，执行 resolve
					defereds.push(defer);
					//console.log(defer)
				});
				$.when.apply(null,defereds).done(function(){ //当所有的图片都执行 resolve 后，即全部图片加载后，执行下面的内容
					console.log('new images all loaded ...');
					//当节点里的图片全部加载后再使用瀑布流计算，否则会因为图片未加载 item 高度计算错误导致瀑布流高度计算出问题
					_this.waterFallPlace($nodes);
				});
			},

			renderData: function(items){       //items为获取的ret.data数据
				var tpl = '',
					$nodes;
				for(var i = 0;i<items.length;i++){
					tpl += '<li class="item">';
					tpl += ' <a href="#" class="link"><img src="' + items[i].img_url + '" alt=""></a>';
					tpl += ' <h3 class="header">'+ items[i].short_name +'</h3>';
					tpl += '<p class="desp">'+items[i].short_intro+'</p>';
					tpl += '</li>';
				}
				$nodes = $(tpl);
				this.$waterfall.append($nodes);
				// console.log($nodes)
				return $nodes;
			},

			

			waterFallPlace: function($nodes){
				var _this = this,
						colSumHeight = this.colSumHeight,
						nodeWidth = this.nodeWidth;
				$nodes.each(function(){
				   var $cur = $(this);
				   var idx = 0,
				       minSumHeight = colSumHeight[0];

				   for(var i=0;i<colSumHeight.length;i++){
				   	if(colSumHeight[i]<minSumHeight){
				   		minSumHeight = colSumHeight[i];
				   		idx = i;
				   	}
				   }

				   $cur.css({
				   	left:nodeWidth*idx,
				   	top:minSumHeight
				    // opacity:1
				   });

				   colSumHeight[idx] += $cur.outerHeight(true);
				   
				});
				this.$waterfall.height( Math.max.apply(null,colSumHeight) ) ;
			}

		};

		return {
			init: init,
			getList: getList
		};
		
	})();

	return WaterFall;

})