$.fn.stick = function(handler){
var $cur = this,
    curH = $cur.height(),
    curW = $cur.width(),
    offsetTop = $cur.offset().top,
    offsetLeft = $cur.offset().left,
    onChange = handler || function(){};

var $div = $cur.clone()
            .css('opacity', 0)
            .insertBefore($cur)
            .hide();

$(window).on('scroll', function(){
    var scrollTop = $(this).scrollTop();
    if(scrollTop >= offsetTop){
        if(!isFixed()){
            setFixed();
            onChange.call($cur);
        } 
    }
    else {
            if(isFixed()){
                unsetFixed();
            }
        }
});


function isFixed(){
    return !!$cur.attr('data-fixed');
}

function setFixed(){
    $cur.attr('data-fixed', true)
        .css({
            position: 'fixed',
            top: 0,
            left: offsetLeft,
            'z-index': 9999,
            width: curW,
            margin: 0
        });
    $div.show();
}

function unsetFixed(){
    $cur.removeAttr('data-fixed')
        .removeAttr('style');
    $div.hide();
}

}


$('#nav').stick();

$('.aside').stick(function(){
    $(this).css({
        'background': 'pink',
        'marginTop': '45px'
    });
})