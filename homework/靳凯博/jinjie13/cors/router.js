app.get('/getNews', function (req, res) {

    var news = [
        '11111111111',
        '22222222222222222222222',
        '333333333333',
        '444444444444444',
        '555555555555',
        '666666666666',
        '777777777777777777',
        '888888888888888888',
        '99999999'
    ]
    var data = [];
    for (var i = 0; i < 3; i++) {
        var index = parseInt(Math.random() * news.length);
        data.push(news[index]);
        news.splice(index, 1);
    }
    res.header("Access-Control-Allow-Origin", "http://a.jkb.com:8080");
    //res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
})

