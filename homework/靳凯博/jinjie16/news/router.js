/**
 * 使用范例
 */

/*获取更多内容*/
app.get('/more', function (req, res) {

    var num = parseInt(req.query.count);
    var arr = [];
    for (var i = num+1; i < (num + 5); i++) {
        arr.push('内容' + i);
    }
    res.send(arr);
});