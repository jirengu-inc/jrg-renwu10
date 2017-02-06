app.get('/getNews',function(req,res){
 var news = [
	 '特朗普再挥刀：全面暂停免面签 中国留学生无奈',
	 '中国火箭军为何砸下几千万美元搞齐射 令美日忌惮',
	 '火箭军为何砸下几千万美元搞齐射 令美日忌惮',
	 '儿子欠赌债被人堵门 他将儿子和赌友全送拘留所'
 ]
	var date = [];

	for(i = 0;i<3;i++){
		var index = parseInt(Math.random()*news.length);
		date.push(news[index]);
		news.splice(index,1);
		}
	var cb = req.query.callback;
	res.header('Access-Control-Allow-Origin','http://a.jrg.com:8080')
	/*通过在返回结果中增加一个响应头Access-Control-Allow-Origin; 浏览器判断该相应头中是否包含Origin 的值，如果有则浏览器会处理响应
	值可以用‘*’，代表可以接受所有域名的请求
	*/
	if(cb) {                                                           
		res.send(cb + '(' + JSON.stringify(date) + ')');
	}else{
		res.send(date)
	}
})