function ajax(opts) {

    //设置默认情况
    opts.success = opts.success || function () { }
    opts.error = opts.error || function () { }
    opts.type = opts.type || 'get'
    opts.dataType = opts.dataType || 'json'
    opts.data = opts.data || {}

    //拼接参数
    var dataStr = ''
    for (var key in opts.data) {
        dataStr += key + '=' + opts.data[key] + '&'
    }
    dataStr = dataStr.substr(0, dataStr.length - 1)

    //创建ajax，设置请求完成回调
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200 || xmlhttp.status === 304) {
                if (opts.dataType === 'text') {
                    opts.success(xmlhttp.responseText)
                }
                if (opts.dataType === 'json') {
                    var json = JSON.parse(xmlhttp.responseText)
                    opts.success(json)
                }
            } else {
                opts.error()
            }
        }
    }
    //判断请求方式并发送请求
    if (opts.type.toLowerCase() === 'post') {
        xmlhttp.open(opts.type, opts.url, true)
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xmlhttp.send(dataStr)
    }
    if (opts.type.toLowerCase() === 'get') {
        xmlhttp.open(opts.type, opts.url + '?' + dataStr, true)
        xmlhttp.send()
    }
}