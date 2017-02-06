function Tab($ct){
    var _this = this;
    this.$ct = $ct;
    this.bind = function(){
        this.$ct.find('.tab-header>li').on('click', function(){
            var $this = $(this),
                //$panls = $this.parents('.tab').find('.tab-container>li'),
                $panls = _this.$ct.find('.tab-container>li'),
                index = $this.index();
            $this.siblings().removeClass('active');
            $this.addClass('active');
            $panls.removeClass('active');
            $panls.eq(index).addClass('active');
        })
    }
    this.bind();
}


var tabFirst = new Tab($('.tab').eq(0));
var tabSecond = new Tab($('.tab').eq(1));

console.log('tabFirst');
console.log(tabFirst);
console.log('tabSecond');
console.log(tabSecond);

