/**
 * Created by NICK on 2016/10/3.
 */
// define(['jquery'],function ($) {
    var water = (function () {
        function waterFall($data){
            var curPage = 1,
                PageCount = 9;

            function loadAndPlace() {
                $.ajax({
                    url: 'http://platform.sina.com.cn/slide/album_tech',
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    data: {
                        app_key: '1271687855',
                        num: PageCount,
                        page: curPage
                    }
                }).done(function (ret) {//$.done()知识点
                    if(ret && ret.status && ret.status.code == '0'){
                        place(ret.data);
                    }else{
                        console.log('get wrong data');
                    }
                });
                curPage++
            }

            loadAndPlace();

            $('#load').on('click',function () {
                loadAndPlace();
            })

            function place(nodeList) {
                var $node = renderData(nodeList),
                    defereds = [];
                $node.find('img').each(function () {
                    var defer = $.Deferred();
                    $(this).load(function () {
                        defer.resolve();
                    })
                    defereds.push(defer);
                })
                $.when.apply(null,defereds).done(function () {
                    waterFallPlace($node);
                })
            }

            function renderData(items) {
                var tpl = '',
                    $node;
                for(var i = 0;i<items.length;i++){
                    tpl += '<li class="item">';
                    tpl += ' <a href="'+ items[i].url +'" class="link"><img src="' + items[i].img_url + '" alt=""></a>';
                    tpl += ' <h4 class="header">'+ items[i].short_name +'</h4>';
                    tpl += '<p class="desp">'+items[i].short_intro+'</p>';
                    tpl += '</li>';
                }
                $node = $(tpl);
                $data.append($node);
                return $node;
            }

            var colSumHeight = [],
                nodeWidth = $data.find('.item').outerWidth(true),
                colNum = parseInt($data.width()/nodeWidth);
            for (var i=0;i<colNum;i++){
                colSumHeight.push(0)
            }
//          console.log(nodeWidth)
            function waterFallPlace($nodes){
                $nodes.each(function (){
                    var $cur = $(this),
                        idx = 0,
                        minSumHeight = colSumHeight[0];


                    for (var i=0;i<colSumHeight.length;i++){
                        if(colSumHeight[i]<minSumHeight){
                            minSumHeight = colSumHeight[i];
                            idx = i;
                        }
                    }

                    $cur.css({
                        top: minSumHeight,
                        left: idx*nodeWidth,
                        opacity: 1
                    })

                    colSumHeight[idx] += $cur.outerHeight(true);
                    $data.height(Math.max.apply(null,colSumHeight));//添加完成后需要增加父容器宽度
//              console.log(Math.max.apply(null,colSumHeight));
                })
            }
        }
        return waterFall
    })()

    module.exports = water;
//     return water
// })