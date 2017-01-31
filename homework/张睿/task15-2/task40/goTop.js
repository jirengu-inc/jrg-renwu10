
define(["../lib/jquery.min"],function () {

    function goTop(ct) {
        this.ct=ct;
        this.target=$('<i class="fa fa-caret-square-o-up fa-4x goTop" aria-hidden="true"></i>');
        goTopCt=this.ct;
        goTopTr=this.target;
        this.createNode();
        this.bindEvent();
    }
    goTop.prototype={
        bindEvent:function () {
            $(window).on("scroll",function () {
                function canShow() {
                    var windowH=$(window).height(),
                        scrollH=$(window).scrollTop();
                    if (scrollH>windowH){
                        return true;
                    }
                    else {return false}
                }
                if (canShow()){
                    goTopTr.show();
                    $(".ct-nav").css({"background-color":"#333"})
                }
                else {
                    goTopTr.hide();
                    $(".ct-nav").removeAttr("style")
                }
            }) ;
            goTopTr.on('click',function () {
                $('html,body').animate({"scrollTop":"0px"},800)
            });
        },
        createNode:function (){
            $(goTopCt).append(goTopTr)
        }
    };
    var GoTop1= new goTop('body');




    return { GoTop1 };
});
