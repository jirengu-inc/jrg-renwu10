app.get('/getMore', function(req, res){

    var start = parseInt(req.query.start),
        len = parseInt(req.query.len);
    console.log('start: ' + start);
    console.log('len: ' + len);
    var data = [];
    for(var i = start; i < start + len; i++ ){
        data.push('内容' + i);
    }
    res.send({
        status: 0,
        data: data
    })
})