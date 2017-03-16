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

	var cb = req.query.callback
	if(cb){
		res.send(cb + '('+ JSON.stringify(data) + ')')
	}else{
		res.send(data)
	}

})