/**
 * Created by yaoyao on 2017/2/17.
 */

var $ = require('../lib/jquery');

function GoTop($parent) {
    this.ct = $parent || $("body");
    this.target = $('<div class="go-top"><i class="iconfont">&#xe602;</i></div>');
    this.createNode();
    this.bindEvent();
}
GoTop.prototype.bindEvent = function() {
    var $cur = this.target;
    var _this = this;
    var clockForTimeout;
    $cur.on("click", function() {
        var clock = setInterval(function() {
            var top = $(window).scrollTop();
            var speed = 50;
            if ((top - speed) > 0) {
                $(window).scrollTop(top - speed);
            } else {
                $(window).scrollTop(0);
                clearInterval(clock);
            }
        }, 5)
    })
    $(window).on("scroll", function() {
        if (clockForTimeout) {
            clearTimeout(clockForTimeout)
        }
        clockForTimeout = setTimeout(function() {
            if ($(window).scrollTop() > 600) {
                $cur.show()
            }
            if ($(window).scrollTop() < 600) {
                $cur.hide()
            }
        }, 200)

    })
}
GoTop.prototype.createNode = function() {
    this.ct.append(this.target);
}

module.exports = GoTop;