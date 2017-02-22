/**
 * Created by yaoyao on 2017/2/22.
 */



define(["jquery"],function ($) {
    /**
     * Created by fm on 2017/2/6.
     */
    function WaterFall($ct) {
        this.$ct=$ct;
        // 首先进行初始化，
        // 完了点击加载按钮后,getData
        // 渲染数据，添加到body上  renderData
        // 按照瀑布流的方式进行渲染   render
        this.init();

        this.addEvent();
        this.resize();
    }
    WaterFall.prototype={
        init:function () {
            this.colHeightArr=[];
            this.data=[];
            this.curPage=0;
            this.perPageCount=6;
        },
        getData:function () {
            var curPage=this.curPage,
                perPageCount=this.perPageCount,
                _this=this;
            $.get("/water",{curPage:curPage,perPageCount:perPageCount})
                .done(function(res){
                    if(res && res.status.code === '0'){
                        var $nodes=_this.renderData(res.data);
                        _this.render($nodes);
                        _this.curPage++;
                    }
                })
                .fail(function() {
                    console.log("error");
                })
        },

        renderData:function (items) {
            var tpl = '';
            var $nodes;
            for(var i = 0;i<items.length;i++){
                tpl += '<li>';
                tpl += '<a href"">';
                tpl += '<div class="cover">';
                tpl += '<img src="imgs/logo.png" alt="">';
                tpl += '<p>'+ items[i].p_name +'</p>';
                tpl += '</div>';
                tpl += '<img src="' + items[i].img_src + '" alt="">';
                tpl += '</li>';
            }
            $nodes = $(tpl);
            $('.items').find('li').append($nodes);
            return $nodes;
        },
        addEvent:function () {
            var _this=this;
            $(".load").on("click",function (e) {
                _this.getData();
            })
        },
        render:function ($nodes) {
            var me=this;    //指向water这个对象
            this.$items=this.$ct.find(".item");
            if(this.$items.length==0) return;
            this.itemWidth=this.$items.outerWidth(true);
            this.$ct.width("1200px");
            this.colNum = parseInt(this.$ct.width()/this.itemWidth);
            this.$ct.width(this.itemWidth*this.colNum);
            if(this.colHeightArr.length==0 || !$nodes){
                for(var i=0;i<this.colNum;i++){
                    this.colHeightArr[i]=0;
                }
            }
            if($nodes){
                $nodes.each(function () {
                    var $item=$(this);
                    $item.find("img").on("load",function () {
                        me.placeItem($item);
                        me.$ct.height(Math.max.apply(null,me.colHeightArr));
                    })
                })
            }
        },
        placeItem:function ($elem) {
            var $me=$elem,
                minHeightInfo=this.getMin(),
                idx=minHeightInfo.idx,
                minSumHeight=minHeightInfo.minSumHeight;
            $me.css({
                left:idx*this.itemWidth,
                top:minSumHeight
            })
            this.colHeightArr[idx]+=$me.outerHeight(true);
        },
        getMin:function () {
            var idx=0,
                minSumHeight=this.colHeightArr[0];
            for(var i=1;i<this.colHeightArr.length;i++){
                if(this.colHeightArr[i]<minSumHeight){
                    idx=i;
                    minSumHeight=this.colHeightArr[i];
                }
            }
            return{
                idx:idx,
                minSumHeight:minSumHeight
            }
        },
        resize:function () {
            var me=this;
            $(window).on("resize",function () {
                me.render();
            })
        }
    }
    return WaterFall;
})