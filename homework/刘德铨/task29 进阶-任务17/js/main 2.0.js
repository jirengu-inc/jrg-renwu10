var $imgCt = $('.img-ct'),
    $preBtn = $('.btn-pre'),
    $nextBtn = $('.btn-next'),
    $bullet = $('.bullet'),
    $firstImg = $imgCt.find('li').first(),
    $lastImg = $imgCt.find('li').last(),
    $ctoInterval = $('.control-interval'),
    $ctoPlus = $('.control-plus'),
    $cover = $('.cover');
    $imgCtPlus = $('.img-ct-plus');
    $close = $('.close');

var curPageIndex = 0;
var imgLength = $imgCt.children().length;
var isAnimate = false;
var isInterval = false;
var intervalPlay = null;

$imgCt.prepend($lastImg.clone());
$imgCt.append($firstImg.clone());
$imgCt.width($firstImg.width() * $imgCt.children().length);
$imgCt.css('left','-420px');


$preBtn.on('click', function(){
    play(curPageIndex - 1);
});
$nextBtn.on('click', function(){
    play(curPageIndex + 1);
});

$bullet.on('click', 'li', function(){
    play($(this).index());
})

$ctoInterval.on('click', 'div', function(){
    ctoInter($(this));
})

intervalPlay = setInterval(function(){
    play(curPageIndex + 1);
},8000);


$ctoPlus.on('click', function(){
    $imgCtPlus.fadeIn(1800);
    $cover.fadeToggle(800); 
    $imgCtPlus.find('li').eq(curPageIndex).addClass('show');
    $imgCtPlus.find('.close').addClass('show');

    if($ctoInterval.find('.active').siblings().children().attr('class') === 'play'){
        clearInterval(intervalPlay);
        $ctoInterval.find('.stop').parent().removeClass("active");
        $ctoInterval.find('.play').parent().addClass("active");
    }
})

$close.on('click' ,function(){
    $imgCtPlus.fadeOut(1800);
    $cover.fadeToggle(800);
    $imgCtPlus.find('li').removeClass('show');
    $imgCtPlus.find('.close').removeClass('show');
})


function play(index){
    if(curPageIndex === index){
        return;
    }
    if(isAnimate) return;
    isAnimate = true;
    $imgCt.animate({
        left: '+=' + (curPageIndex - index) * $firstImg.width()
    }, function(){
        curPageIndex = index;
        if(curPageIndex === imgLength){
            $imgCt.css({
                left: - $firstImg.width()
            })
            curPageIndex = 0;
        }
        else if(curPageIndex === -1){
            $imgCt.css({
                left: - $firstImg.width() * imgLength
            })
            curPageIndex = imgLength -1 ;
        } 
        isAnimate = false;
        setBullet();
        canLoad(curPageIndex);
    })
}


function setBullet(){
    $bullet.children()
           .removeClass('active')
           .eq(curPageIndex)
           .addClass('active');
}


function ctoInter(node){
    console.log(node);
    if(isInterval) return;
    isInterval = true;
    node.removeClass('active');
    node.siblings().addClass('active');
    if(node.children().attr('class') === 'stop'){
        clearInterval(intervalPlay);
    }
    else if(node.children().attr('class') === 'play'){
        intervalPlay = setInterval(function (){
            play(curPageIndex + 1);
        },8000);
    }
    isInterval = false;
}


function canLoad(key){
    if($imgCtPlus.find('img').eq(key).attr('src') === ''){
        var imgUrl = $imgCtPlus.find('img').eq(key).attr('data-src')
        $imgCtPlus.find('img').eq(key).attr('src', imgUrl);
    }
}


