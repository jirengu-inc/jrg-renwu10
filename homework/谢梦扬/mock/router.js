app.get('/getContent',function(req,res){
	var arr = []
	var start = req.query.start;
	for(var i = start;i<parseInt(start)+3;i++){
		arr.push('内容'+i);
	}
	setTimeout(function(){
		res.send(arr)
	},1000)

})

