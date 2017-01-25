



app.get('/getMore', function(req, res) {
	var len = req.query.len;
	var index = req.query.index;
	var loadMore = index*len;
	var arr = [loadMore, loadMore+1, loadMore+2];
	res.send({
		status: 0,
		arr
	})
});


