/* 1 */
$(function(){
    $('.btn').on('click', function(){
        $(this).animate({
            backgroundColor: '#FF6B6E'
        }, 1500).animate({
            backgroundColor: '#5FCDE3'
        }, 1500);
    })
})


/* 2 */
$(function(){
    setInterval(function(){
        $('.distance').text($(window).scrollTop());
    }, 0);   
})


/* 3 */
$(function(){
    $('.div').on('mouseenter',function(){
        $(this).animate({
            backgroundColor: '#FF6B6E'
        }, 1000)
    }).on('mouseleave',function(){
        $(this).animate({
            backgroundColor: '#FFF'
        }, 1000)
    })
})


/* 4 */
$(function(){
    $('#input').on('focus', function(){
        $(this).animate({
            borderColor: '#0097CC'
        }, 1000)
    }).on('input', function(){
        if(/[a-z]/.test($(this).val())){
            $(this).val($(this).val().toUpperCase());
        }
       
    }).on('blur', function(){
        $(this).animate({
            borderColor: '#FF0300'
        }, 1000)
        console.log('输入内容为：' + $(this).val());
    })
})


/* 5 */
$(function(){
    $('#city').on('change', function(){
        $('.chosed').text($(this).val());
    })
})
