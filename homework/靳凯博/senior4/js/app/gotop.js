define('app/gotop',['jquery'],function($){
    var GoTop = (function () {
        function _GoTop($eleCt, $scrollCt, top) {
            this.$eleCt = $eleCt;
            this.$scrollCt = $scrollCt;
            this.top = top;
            this.$btn = $('<a class="go-top" style="display: none">TOP</a>');
            this.$eleCt.append(this.$btn);
            this.bind();
        }
        _GoTop.prototype.bind = function () {
            var _this = this;
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > _this.top) {
                    _this.$btn.fadeIn('slow');
                } else {
                    _this.$btn.fadeOut('slow');
                }
            });
            this.$btn.on('click', function (e) {
                e.preventDefault();
                _this.$scrollCt.animate({
                    scrollTop: 0
                }, 500);
            });
        };
        return {
            init: function ($eleCt, $scrollCt, top) {
                new _GoTop($eleCt, $scrollCt, top);
            }
        };
    })();
    return GoTop;
})