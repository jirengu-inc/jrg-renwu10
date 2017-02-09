var GoTop = function(ct){
    this.ct = ct;
    this.target = $('<div class = "go-top">回到顶部</div>');
}

GoTop.prototype.createNode = function(){
    this.ct.append(this.target);
}

GoTop.prototype.bindEvent = function(){
    var _this = this;
    $(window).on('scroll', function(){
        var scrollTop = $('body').scrollTop();
        if(scrollTop > 100) {
            _this.target.fadeIn(800);
        }
        else {
            _this.target.fadeOut(800);
        }
    })
    this.target.on('click', function(){
        _this.ct.animate({
            scrollTop: '0px'
        }, 1500)
        //_this.ct.scrollTop(0);
    });
}


var goTop = new GoTop($('body'));
goTop.createNode();
goTop.bindEvent();

