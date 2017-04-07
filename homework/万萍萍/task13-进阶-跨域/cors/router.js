
/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { }
 */
app.get('/getMore', function(req, res) {
	console.log(req.query);
	var index = req.query.index;
	var arr = [];
	for(var i = 0; i < 6; i++){
		index ++;
		arr.push("内容" + index);
	}

	res.header("Access-Control-Allow-Origin", "http://a.mywork.com:8080"); //添加允许跨越的头属性
	res.send(JSON.stringify(arr));
	
	console.log("返回" + JSON.stringify(arr));
});


