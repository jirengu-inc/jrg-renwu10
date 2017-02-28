
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
	res.send(JSON.stringify(arr));
	console.log("返回" + JSON.stringify(arr));
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { }
 */
app.post('/login', function(req, res) {
	console.log(req.body); 
	res.send("发送前端！");
});
