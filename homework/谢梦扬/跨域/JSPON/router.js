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
	/*服务器要检查访问的请求参数，如果没有callback,则照着之前的流程走
	 如果有，则需要把请求的结果包装在callback中*/
	if(cb) {                                                   
		res.send(cb + '(' + JSON.stringify(date) + ')');
	}else{
		res.send(date)
	}
})