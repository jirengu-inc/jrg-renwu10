var $imgCt = $('.img-ct'),
    $preBtn = $('.btn-pre'),
    $nextBtn = $('.btn-next'),
    $bullet = $('.bullet'),
    $firstImg = $imgCt.find('li').first(),
    $lastImg = $imgCt.find('li').last(),
    $ctoInterval = $('.control-interval');

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
    play(curPageIndex - 1)
});
$nextBtn.on('click', function(){
    play(curPageIndex + 1)
});

$bullet.on('click', 'li', function(){
    play($(this).index());
})

$ctoInterval.on('click', 'div', function(){
    ctoInter($(this));
})

intervalPlay = setInterval(function(){
    play(curPageIndex + 1);
},5000);

console.log(intervalPlay);

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
        console.log('index: ' + index);
        console.log('curPageIndex: ' + curPageIndex);
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
    console.log(node.children().attr('class'));
    if(node.children().attr('class') === 'stop'){
        clearInterval(intervalPlay);
        console.log(intervalPlay);
    }
    else if(node.children().attr('class') === 'play'){
        intervalPlay = setInterval(function (){
            play(curPageIndex + 1);
        },5000);
    }
    isInterval = false;
}

