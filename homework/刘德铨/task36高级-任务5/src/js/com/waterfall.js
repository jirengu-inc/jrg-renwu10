

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
                this.perPageCount = 6;
                this.click = true;

                this.render();

            },

            render: function(){
                this.colSumHeight = [];
                this.nodeWidth = this.$item.outerWidth(true);
                console.log(this.$Ct.width());
                console.log(this.nodeWidth);
                this.colNum = parseInt(this.$Ct.width()/this.nodeWidth);
               
                for(var i = 0; i < this.colNum; i++){
                    this.colSumHeight.push(0);
                }
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
                //console.log(nodeList);
                var _this = this;
                //节点生成后添加到页面上
                this.renderData(nodeList);
                //创建存储 defered 对象的数组
                var defereds = [];
                console.log(this.$nodes);
                console.log(this.$nodes.eq(2).height());
                this.$nodes.find('img').each(function(){
                    var defer = $.Deferred();
                    //当每个图片加载完成后，执行 resolve
                    $(this).on('load', function(){
                        defer.resolve();
                    });
                    defereds.push(defer);
                });
                /*当所有的图片都执行 resolve 后，
                即全部图片加载后，执行下面的内容*/
                $.when.apply(null, defereds).done(function(){
                    console.log('new images all loaded ...');
                    /* 
                   当节点里的图片全部加载后再使用瀑布流计算，
                    否则会因为图片未加载 item 高度计算错误导致瀑布流高度计算出问题
                    */
                    _this.waterFallPlace(_this.$nodes);

                })

            },

            renderData: function(items){
                var _this = this;
                console.log(items.length);
                var tpl = '';
                for(var i = 0; i < items.length; i++){
                    tpl += '<li class="item">'
                           +      '<a href="' + items[i].url + '" class="link">'
                           +          '<img src="' + items[i].img_url + '" alt="">'
                           +      '</a>'
                           +      '<h4 class="header">' + items[i].short_name + '</h4>'
                           +      '<p class="desp">' + items[i].short_intro + '</p>'
                           + '</li>';
                }
                this.$nodes = $(tpl);
                this.$Ct.append(this.$nodes);   
            },

            waterFallPlace: function($nodes){
                var _this = this;
                $nodes.each(function(){
                    var idx = 0,
                        $cur = $(this),
                        minSumHeight = _this.colSumHeight[0];
                    for(var i = 0; i < _this.colSumHeight.length; i++){
                        if(_this.colSumHeight[i] <  minSumHeight){
                            idx = i;
                            minSumHeight = _this.colSumHeight[i];
                        }
                    }
                    
                    $cur.css({
                        left: idx * _this.nodeWidth,
                        top: minSumHeight
                    });
                    _this.colSumHeight[idx] += $cur.outerHeight(true);
                    _this.$Ct.height(Math.max.apply(null, _this.colSumHeight));
                    _this.click = true;

                })
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

    module.exports = waterFall;


