/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/loading', function(req, res) {
	var data=[];
	for(var i=0;i<req.query.len;i++){
		data[i]=parseInt(req.query.start)+i;
	}
	//console.log(req.query.start)
        res.send({
            status: 1,
            data: data
        });
});
