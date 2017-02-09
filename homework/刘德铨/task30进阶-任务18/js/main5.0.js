/*
function dosth
1. 获取page = 1 的10条数据
2. 把10条数据拼装成DOM放到页面
3. 使用瀑布流去摆放DOM的位置
4. page++

当lead出现时
1. 获取page 的10条数据
2. 把10条数据拼装成DOM放到页面
3. 使用瀑布流去摆放DOM的位置
4. page++
*/

var ExposureTarget = (function(){

    function bind($target, handler){
        var clock;
        $(window).on('scroll', function(){
            /*用户鼠标滚轮滚动一次，有多次事件响应。
            下面的 setTimeout 主要是为性能考虑，
            只在最后一次事件响应的时候执行 checkshow*/
            if(clock){
                clearTimeout(clock);
            }
            clock = setTimeout(function(){
                checkShow();
            }, 100);
        });


        /*  用户第一次打开页面，
          还未滚动窗口的时候需要执行一次 checkShow*/

        checkShow();

        function checkShow(){
            if(isShow($target)){
                handler();
            }
        }

        function isShow($el){
            var winH = $(window).height(),
                scrollT = $(window).scrollTop(),
                top = $el.offset().top,
                elH = $el.outerHeight(true);

            if(winH + scrollT > top && scrollT < top + elH){
                return true;
            }
            else {
                return false;
            }

        }
    }


    return {
        bind:bind
    }

})()


ExposureTarget.bind($('#load'), loadAndPlace);


// 获取数据，并且摆放位置


    



var curPage = 1,
    perPageCount = 9;


function loadAndPlace(){
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
            num: perPageCount,  
            page: curPage      
        }
    }).done(function(ret){
        if(ret && ret.status && ret.status.code === "0"){
            //如果数据没问题，那么生成节点并摆放好位置
            place(ret.data);
            curPage++;

        }
        else {
            console.log('获取数据失败！');
        }
    });
}
    



function place(nodeList){
    console.log(nodeList);
    //节点生成后添加到页面上
    var $nodes = renderData(nodeList);  
    //创建存储 defered 对象的数组
    var defereds = [];  
    $nodes.find('img').each(function(){
        var defer = $.Deferred();
        //当每个图片加载完成后，执行 resolve
        $(this).on('load', function(){
             defer.resolve();
        });
        defereds.push(defer);
    });
    /*当所有的图片都执行 resolve 后，
    即全部图片加载后，执行下面的内容*/
    $.when.apply(null, defereds).done(function() { 
        console.log('new images all loaded ...');
       /* 
       当节点里的图片全部加载后再使用瀑布流计算，
        否则会因为图片未加载 item 高度计算错误导致瀑布流高度计算出问题
        */
        waterFallPlace($nodes);
       /* $(window).on('resize', function(){
               render($nodes);
        })*/
    });
}

function renderData(items){
    var tpl = '',
        $nodes;
    for(var i = 0;i<items.length;i++){
        tpl += '<li class="item">';
        tpl += ' <a href="'+ items[i].url +'" class="link"><img src="' + items[i].img_url + '" alt=""></a>';
        tpl += ' <h4 class="header">'+ items[i].short_name +'</h4>';
        tpl += '<p class="desp">'+items[i].short_intro+'</p>';
        tpl += '</li>';
    }
    $nodes = $(tpl);
    $('#pic-ct').append($nodes);
    return $nodes;
}


// 瀑布流


/*function render($nodes){
    var colSumHeight = [],
        nodeWidth = $('.item').outerWidth(true),
        colNum = parseInt($('#pic-ct').width()/nodeWidth);

    for(var i=0; i<colNum; i++){
        colSumHeight.push(0)
    }

    waterFallPlace($nodes);
}*/

var colSumHeight = [],
        nodeWidth = $('.item').outerWidth(true),
        colNum = parseInt($('#pic-ct').width()/nodeWidth);

for(var i=0; i<colNum; i++){
    colSumHeight.push(0)
}


function waterFallPlace($nodes){
    

    $nodes.each(function(){
        var $cur = $(this);
       
        var idx = 0,
              minSumHeight = colSumHeight[0];

        for(var i=0;i<colSumHeight.length; i++){
            if(colSumHeight[i] < minSumHeight){
                idx = i;
                minSumHeight = colSumHeight[i];
            }
        }

        $cur.css({
            left: nodeWidth*idx,
            top: minSumHeight,
            opacity: 1
        });

        colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
        $('#pic-ct').height(Math.max.apply(null,colSumHeight));
    });
}


