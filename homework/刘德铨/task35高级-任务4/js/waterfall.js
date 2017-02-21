


var waterFall = (function(){

    function waterFallFlow($target){
        this.$target = $target;
        this.$getNews = this.$target.find('.more');
        this.$item = this.$target.find('.item');
        this.$Ct = this.$target.find('#pic-ct');
        

        this.init();
        this.bind();

    }

    waterFallFlow.prototype = {
        init: function(){
            this.curPage = 1;
            this.perPageCount = 5;
            this.click = true;
            this.colSumHeight = [];
            this.nodeWidth = this.$item.outerWidth(true);
            this.colNum = parseInt(this.$Ct.width()/this.nodeWidth);

            for(var i = 0; i < this.colNum; i++){
                this.colSumHeight.push(0)
            }

            console.log(this.$Ct.width());
            console.log(this.colSumHeight);

        },

        bind: function(){
            var _this = this;
            this.$getNews.on('click', function(){
                if(!_this.click) {
                    return;
                }
                _this.click = false;
                _this.loadAndPlace();

            })

        },

        loadAndPlace: function(){
            var _this = this;
            $.ajax({
                /*
                这里使用了新浪新闻的 jsonp 接口，
                大家可以直接看数据， 
                如： http://platform.sina.com.cn/slide/album_tech?
                jsoncallback=func&app_key=1271687855&num=3&page=4
                */
                url: 'http://platform.sina.com.cn/slide/album_tech',
                type: 'get',
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                data: {
                    app_key: '1271687855',
                    num: _this.perPageCount,  
                    page: _this.curPage      
                }
            }).done(function(ret){
                if(ret && ret.status && ret.status.code === "0"){
                    console.log('获取数据成功！');
                    _this.place(ret.data);
                    _this.curPage++;
                }
                else {
                    console.log('获取数据失败！');
                }
            });

        },

        place: function(nodeList){
            console.log(nodeList);
            var _this = this;
            //节点生成后添加到页面上
            this.renderData(nodeList);
            //创建存储 defered 对象的数组
            

        },

        renderData: function(items){
            var _this = this;
            console.log(items.length);
            for(var i = 0; i < items.length; i++){
                this.tpl += '<li class="item">'
                       +        '<a href="' + items[i].url + '" class="link">'
                       +            '<img src="' + items[i].img_url + '" alt="">'
                       +        '</a>'
                       +        '<h4 class="header">' + items[i].short_name + '</h4>'
                       +        '<p class="desp">' + items[i].short_intro + '</p>'
                       +    '</li>';
            }
            this.$Ct.append(this.tpl);
            this.$nodes = this.tpl;
        },

        render: function(){

        },

        waterFallPlace: function(){

        }



    }

    return {
        flow: function($target){
            $target.each(function(idx, node){
                new waterFallFlow($(node));
            })
        }
    }

})();


$.fn.waterfall = function(){
    waterFall.flow(this);
}

$('.wrap').waterfall();