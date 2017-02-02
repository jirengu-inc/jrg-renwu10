/*
var $goTop = $('<div id="go-top">回到顶部</div>');
$('body').append($goTop);
$(window).on('scroll', function(e){
    var offsetTop = $('body').scrollTop();
    console.log(offsetTop);
    if(offsetTop > 100){
        $goTop.show();
    }
    else {
        $goTop.hide();
    }
})
$goTop.on('click', function(){
    $('body').scrollTop(0);
})*/


var GoTop = {
    init: function(){
        if($('#go-top').length > 0){
            return;
        }
        var $goTop = $('<div id="go-top">回到顶部</div>');
        $('body').append($goTop);
        this.$goTop = $goTop;
        this.bind();

    },
    bind: function(){
        var me = this;
        $(window).on('scroll', function(e){
        var offsetTop = $('body').scrollTop();
            if(offsetTop > 100){
                me.$goTop.show();
            }
            else {
                me.$goTop.hide();
            }
        })
        me.$goTop.on('click', function(){
            $('body').scrollTop(0);
        })
    }
}

GoTop.init();