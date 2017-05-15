define(['jquery', 'app/waterfall'], function($, Waterfall){
	var LoadMore = (function(){
		/*数据接口：
		https://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4 
		*/
		function _LoadMore($ct, $btn){
			this.$ct = $ct
			this.$btn = $btn
			this.curPage = 1
			this.pageCount = 8
			this.ajaxLock = false
			this.getData()
			this.bind()
		}
		_LoadMore.prototype.bind = function(){
			var _this = this
				this.$btn.on('click', function(){
					_this.getData()
				})	
		}

		_LoadMore.prototype.getData = function(){
			var _this = this
			//ajax请求
			if(this.ajaxLock)return
			this.ajaxLock = true
			$.ajax({
				url: 'https://platform.sina.com.cn/slide/album_tech',
				type: 'get',
				dataType: 'jsonp',
				//设置url参数
				jsonp: 'jsoncallback',
				data:{
					app_key: '1271687855',
					num: _this.pageCount,
					page: _this.curPage
				}
			}).done(function(ret){
				if(ret && ret.status.code === '0'){//如果数据获取成功则渲染页面
					_this.renderData(ret.data)
					//更新curPage
					_this.curPage++
					_this.ajaxLock = false
				}else{
					alert('获取数据失败！')
				}
			})
		}

		_LoadMore.prototype.renderData = function(data){
			var _this = this
			var html = ''
			for(var i = 0; i < data.length; i++){
				html += '<li>'
						 + '<a href="' + data[i].url + '">'
						 + '<img src="' + data[i].img_url +'" alt="图片"' + '>'
						 + '<h4>' + data[i].short_name + '</h4>'
						 + '<p>' + data[i].short_intro + '</p>'
						 + '</a>'
						 + '</li>'
			}
			_this.$ct.append($(html))
			//所有图片加载完成执行瀑布流布局
			_this.$ct.find('img').on('load', function(){
				Waterfall.init($('.waterfall-ct'))
			})
		}
		return {
			init: function($ct, $btn){
				new _LoadMore($ct, $btn)
			}
		}
	})()
	return LoadMore
})

// LoadMore.init($('.waterfall-ct'), $('.loadmore'))





