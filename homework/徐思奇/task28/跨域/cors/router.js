app.get('/getNumber', function(req, res){
	var number = [
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"night",
		"ten"
	]
	var data = []
	for(var i = 0; i < 3; i++){
		var index = parseInt(Math.random()*number.length)
		data.push(number[index])
		number.splice(index, 1)
	}
	// res.header("Access-Control-Allow-Origin", "http://winters.com:8080");  //只对指定的地址开通
	res.header("Access-Control-Allow-Origin", "*")//cors原理在此 对所有地址开通
	res.send(data)
})