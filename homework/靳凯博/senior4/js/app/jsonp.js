define('app/jsonp',['jquery','app/waterfall'],function($,WaterFall){
    function Jsonp($ct){
        this.$ct = $ct;
        this.perPageCount = 8;
        this.curPage = 1;
        this.load();
    }
    Jsonp.prototype.load = function(){
        var _this = this;
        //进行ajax请求
        $.ajax({
            url:'https://platform.sina.com.cn/slide/album_tech',
            type:'get',
            dataType:'jsonp',
            jsonp:'jsoncallback',
            //设置url参数
            data:{
                app_key: '1271687855',
                num: _this.perPageCount,
                page: _this.curPage
            }
        }).done(function(ret){
            if (ret && ret.status.code === "0") {
                //如果数据返回成功就渲染页面
                _this.renderData(ret.data);
                //更新curpage
                _this.curPage++;
            }else {
                console.log('获取数据失败！')
            }
        })
    }
    Jsonp.prototype.renderData = function(data){
        var _this = this;
        var tpl = '';
        for (var i = 0; i < data.length; i++){
            tpl += '<li>'
                + '<a href="' + data[i].url + '" class="link">'
                + '<img src="'+ data[i].img_url + '" alt=""' + '>'
                + '</a>'
                + '<h4>' + data[i].short_name + '</h4>'
                + '<p>' + data[i].short_intro + '</p>'
                + '</li>'
        }
        _this.$ct.append($(tpl));
        //当所有图片加载完成才进行瀑布流操作
        _this.$ct.find('img').on('load',function(){
            WaterFall.init($('.waterfall-ct'));
        })

    }
    return Jsonp;
})