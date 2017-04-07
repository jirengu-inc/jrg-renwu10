var $ct = $('.img-ct'),
    $items = $ct.children(),
    $pre = $('.pre'),
    $next = $('.next'),
    $bullet = $('.bullet'),
    imgWidth = $items.width(),
    imgCount = $ct.children().size();



var curIdx = 0;
var isAnimate = false;

$next.on('click', function () {
    playNext();
});
$pre.on('click', function () {
    playPre();
});
$bullet.find('li').on('click', function () {
    var idx = $(this).index();
    play(idx);
});

play(0);
autoPlay();




function playNext() {
    play((curIdx + 1) % imgCount)
}

function playPre() {
    play((imgCount + curIdx - 1) % imgCount)
}

function play(idx) {
    if (isAnimate) return;
    isAnimate = true;
    $items.eq(curIdx).fadeOut(500);
    $items.eq(idx).fadeIn(500, function () {
        isAnimate = false;
    });

    curIdx = idx;
    setBullet();
}

function setBullet() {
    $bullet.children().removeClass('active')
        .eq(curIdx).addClass('active');
}

function stopAuto() {
    clearInterval(clock);
}

function autoPlay() {
    clock = setInterval(function () {
        playNext();
    }, 2000);
}