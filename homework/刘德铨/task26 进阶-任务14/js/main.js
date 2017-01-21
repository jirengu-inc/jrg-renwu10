/* 1 */
$(function(){
    $('.nav').on('mouseover','.item',function(e){
        $(this).find('.sec-level-nav').show();
    });

    $('.nav').on('mouseout','.item',function(e){
        $(this).find('.sec-level-nav').hide();
    })

})

/* 2 */
$(function(){
    $('.tab .tab-title li').on('click',function(e){
        var index = $(this).index();
        $(this).parents('.tab').find('.tab-commodities>li').removeClass('active');
        $(this).siblings().removeClass('active');
        $(this).parents('.tab').find('.tab-commodities>li').eq(index).addClass('active');
        $(this).addClass('active');
    })

    $('.com-item').on('mouseenter','li',function(e){
        $(this).find('.cover').addClass('active');
    })

    $('.com-item').on('mouseleave','li',function(e){
        $(this).find('.cover').removeClass('active');
    })
})

/* 3 */
$(function(){
    var products = [
        {
            img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
            name: '珂兰 黄金手 猴哥款',
            price: '￥405.00'
        },{
            img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
            name: '珂兰 黄金转运珠 猴哥款',
            price: '￥100.00'
        },{
            img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
            name: '珂兰 黄金手链 3D猴哥款',
            price: '￥45.00'
        }
    ];

    function createHTML(products){
        var html = '';
        html += '<li><div class="cover"><a href="javascript:;">立即抢购</a></div>';
        html += '<img src="' + products.img + '" >';
        html += '<h3 class="commodities-title">' + products.name + '</h3>';
        html += '<div class="commodities-price">' + products.price + '</div></li>';
        return html;
    }

    $('.more').on('click',function(){
        $.each(products, function(key, value){
            $('#more .com-item').append(createHTML(value));
        })
    })
})



