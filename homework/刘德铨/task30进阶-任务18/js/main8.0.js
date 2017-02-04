$('#test').on('mousemove', function(e){
    var offset = $(this).offset(),
        x = e.pageX - offset.left,
        y = e.pageY - offset.top,
        centerX = $(this).outerWidth() / 2,
        centerY = $(this).outerHeight() / 2,
        deltaX = x - centerX,
        deltaY = y - centerY,
        percentX = deltaX / centerX,
        percentY = deltaY / centerY,
        deg = 10;
    $('#banner').css({
        transform: 'rotateX(' + deg * -percentY + 'deg)' + 
        ' rotateY(' + deg * percentX + 'deg)'
    })

})

$('#test').on('mouseleave', function(){
    $('#banner').css({
        transform: ''
    })
})