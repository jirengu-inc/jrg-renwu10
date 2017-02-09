var $imgCt = $('.img-ct'),
    $preBtn = $('.btn-pre'),
    $nextBtn = $('.btn-next'),
    $bullet = $('.bullet'),
    $firstImg = $imgCt.find('li').first(),
    $lastImg = $imgCt.find('li').last();

var curPageIndex = 0;
var imgLength = $imgCt.children().length;
var isAnimate = false;

$imgCt.prepend($lastImg.clone());
$imgCt.append($firstImg.clone());
$imgCt.width($firstImg.width() * $imgCt.children().length);
$imgCt.css('left','-420px');

/*$preBtn.on('click', playPre);
$nextBtn.on('click', playNext);*/

$preBtn.on('click', function(){
    play(curPageIndex - 1)
});
$nextBtn.on('click', function(){
    play(curPageIndex + 1)
});

$bullet.on('click', 'li', function(){
    play($(this).index());
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
        console.log('index: ' + index);
        console.log('curPageIndex: ' + curPageIndex);
    })
}


/*function playNext(){
    if(isAnimate) return;
    isAnimate = true;
    $imgCt.animate({
        left: '-=420'
    }, function(){
        curPageIndex++;
        if(curPageIndex === imgLength){
            $imgCt.css({
                'left':'-420px'
            });
            curPageIndex = 0;
        }
        isAnimate = false;
        setBullet();
    }) 
}


function playPre(){
    if(isAnimate) return;
    isAnimate = true;
    $imgCt.animate({
        left: '+=420'
    }, function(){
        curPageIndex--;
        if(curPageIndex === -1){
            $imgCt.css({
                'left': - imgLength * $firstImg.width()
            });
            curPageIndex = imgLength - 1;
        }
        isAnimate = false;
        setBullet();
    })
}*/


function setBullet(){
    $bullet.children()
           .removeClass('active')
           .eq(curPageIndex)
           .addClass('active');
}
