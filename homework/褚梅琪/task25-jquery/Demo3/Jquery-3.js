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

function getProdHtml(prod){
	var html = '';
	html += '<li class="prod">';
	html += '<div class="cover"><a href="" class="btn">立即抢购</a></div>';
	html += '<a href="#">';
	html += '<img src = "'+prod.img+'">';
	html += '<div class="prod-name">'+prod.name+'</div>';
	html += '<div class="prod-price">'+prod.price+'</div>';
	html += '</a>';
	html += '</li>';
	return html;
}

$('.btn-add').on('click',function(e){
	e.preventDefault();
	//$('.prod-ct').append(getProdHtml(products[0]));
	//$('.prod-ct').append(getProdHtml(products[1]));
	//$('.prod-ct').append(getProdHtml(products[2]));
	$.each(products,function(idx,prod){
		$('.prod-ct').append(getProdHtml(prod));
	})
});
$('.layout').on('mouseenter','.prod',function(){
	$(this).addClass('hover');
});
$('.layout').on('mouseleave','.prod',function(){
	$(this).removeClass('hover');
});
	

