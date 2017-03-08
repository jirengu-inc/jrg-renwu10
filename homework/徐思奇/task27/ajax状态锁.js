var ajaxLock = false //状态锁，处于打开状态
btn.addEventListener('click', function () {
    if (ajaxLock) {
        return //如果状态锁上锁，即正在请求数据，那么接下来的点击无效
    } else {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                //do sth
                ajaxLock = false //数据到来后，解锁
            }
        }
        //ajax配置
        xhr.send()
        ajaxLock = true //发送请求后立即上锁
    }
})