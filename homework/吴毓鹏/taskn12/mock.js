Mock.mock(/test.php/, 'get', function (options) {
    var url = options['url']
    var data = returnData(url)
   
    return data;
})

function returnData(url) {
    var dataArr = url.toString().substr(url.indexOf('?') + 1).split('&')
    var data = {}
    for (var i = 0; i < dataArr.length; i++) {
        dataArr[i] = dataArr[i].split('=')
        var key = dataArr[i][0]
        var val = dataArr[i][1]
        data[key] = val;
    }
    var a = parseInt(data['index'])+1
    var mockData = Mock.mock({
        'dataIndex|3': [{
            'id|+1': a
        }]
    })
   
    return mockData;
}