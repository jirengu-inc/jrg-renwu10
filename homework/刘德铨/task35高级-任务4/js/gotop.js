
var goTop = (function GoTop(){
    function _goTop($ct){
        this.$ct = $ct;
        this.$target = $('<div id="back-up-top"></div>');
        this.createNode();
        this.bind();
    }

    _goTop.prototype = {
        createNode: function(){
            this.$ct.append(this.$target);
        },

        bind: function(){
            var _this = this;
            console.log(this.$target);
            console.log(this);
            this.$target.on('mouseenter', function(){
                _this.$target.css({
                    backgroundPosition: '-199px 0px'
                });
            });

            this.$target.on('mouseleave', function(){
                _this.$target.css({
                    backgroundPosition: '-50px 0px'
                });
            });

            $(window).on('scroll', function(){
                var windowHeight = $(this).height(),
                    scrollTop = $(this).scrollTop(),
                    scrollHeight = $(document).height();
              /*  console.log('windowHeight + scrollTop: ', windowHeight + scrollTop);
                console.log('scrollHeight - 300: ' , scrollHeight - 300);*/
                if(windowHeight + scrollTop >= scrollHeight - 10000){
                    _this.$target.css({
                        display: 'block',
                        top: windowHeight - _this.$target.outerHeight(true)
                    })
                }
                var bagPos = _this.$target.css('backgroundPosition');
                if(windowHeight + scrollTop < scrollHeight - 10000 && bagPos === '-50px 0px'){
                    _this.$target.css({
                        display: 'none'
                    })
                }
                if(scrollTop === 0){
                    _this.$target.animate({
                        top: '-1000px'
                    },800)
                    setTimeout(function(){
                        _this.$target.css({
                            display: 'none'
                        })
                    },800);
                }


            });

            this.$target.on('click', function(){
                console.log('click!');
                var n = setInterval(changeBag,50);

                function changeBag(){
                    var bagPos = _this.$target.css('backgroundPosition');
                    if(_this.$target.css('display') === 'none'){
                        clearTimeout(n);
                        console.log('stop');
                        _this.$target.css({
                            backgroundPosition: '-50px 0px'
                        });
                        return ;
                    }

                    console.log('bagPos: ' + bagPos);
                    switch(bagPos){
                        case '-50px 0px':
                            _this.$target.css({
                                backgroundPosition: '-199px 0px'
                            });
                        break;
                        case '-199px 0px':
                            _this.$target.css({
                                backgroundPosition: '-348px 0px'
                            });
                        break;
                        case '-348px 0px':
                            _this.$target.css({
                                backgroundPosition: '-497px 0px'
                            });
                        break;
                        case '-497px 0px':
                            _this.$target.css({
                                backgroundPosition: '-646px 0px'
                            });
                        break;
                        case '-646px 0px':
                            _this.$target.css({
                                backgroundPosition: '-795px 0px'
                            });
                        break;

                    }

                }
                _this.$ct.animate({
                    scrollTop: '0px'
                },1000);
            });
        }
    }

  
    return {
        go: function($target){
            $target.each(function(idx, node){
                new _goTop($(node));
            })
        }
    }
})();

$.fn.gotop = function(){
    goTop.go(this);
}



$('body').gotop();

