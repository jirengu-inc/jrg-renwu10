/**
 * Created by yaoyao on 2017/2/14.
 */



Tab = function () {
    function Tab($ct) {
        this.$ct = $ct;
        this.init();
        this.bind();
    }
    Tab.prototype.init = function () {
        this.$tabHeader = this.$ct.find('.tab-header');
        this.$tabContainer = this.$ct.find('.tab-container')
    }
    Tab.prototype.bind = function () {
        var _this = this;
        this.$tabHeader.on('click', function (e) {
            var $index = $(e.target).index();
            _this.$tabHeader.children().removeClass('active');
            _this.$tabHeader.children().eq($index).addClass('active');
            _this.$tabContainer.children().removeClass('active');
            _this.$tabContainer.children().eq($index).addClass('active');
        })
    }

    return{
        start: function ($ct) {
            $ct.each(function (index, node) {
                new Tab($(node))
            })
        }
    }
}()


Tab.start($('.tab'))

//
// $('.head-ul>li').on('click', function(e){
//     var $this= $(this),
//         $index = $this.index(),
//         $tabs = $this.parents('.wrap').find('.tabs');
//
//     $this.siblings().removeClass('active');
//     $this.addClass('active');
//
//     $tabs.removeClass('active');
//     $tabs.eq($index).addClass('active');
//
// })
//
// $('.cover').on('mouseenter', function(){
//     $(this).addClass('hover');
// })
// $('.cover').on('mouseleave', function(){
//     $(this).removeClass('hover');
// })
