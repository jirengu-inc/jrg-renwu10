/*
*1.判断图片是否可以被用户所看见
*2.若图片已经加载，则不再对其进行事件监听绑定
*3.在初始时，便需要加载图片
 */

/*
 * 1
 */

check()
$(window).on('scroll',function(){
   check()
})

function isShow($node){
    var windowHeight = $(window).height()
        ,scrollTop = $(window).scrollTop()
        ,offsetTop = $node.offset().top
    if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + $node.height()){
        return true
    }else{
        return false
    }
}

function showImg($img){
    $img.each(function(){
        var imgUrl = $(this).attr('data-str')
        $(this).attr('src',imgUrl)
    })
}

function check(){
     $('container img').not('.loaded').each(function(){
        if(isShow($(this))){
            $(this).attr('src',imgUrl)
            $(this).addClass('loaded')
        }
    })
}

