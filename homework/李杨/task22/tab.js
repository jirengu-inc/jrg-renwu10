var Utils = {
    hasClass: function (el,cls){
        var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
        return reg.test(el.className);
    },

    addClass:function(el,cls){
        if(Utils.hasClass(el,cls)){
            return;
        }else{
            el.className=el.className+' '+cls;
        }
    },

    removeClass: function(el,cls){

        for(var i=0;i<el.length;i++){
            el[i].className=el[i].className.replace(new RegExp('\\b'+cls+'\\b', 'g'), '');
        }
    },

    indexOf: function(ele){
        var parent = ele.parentElement,
            siblings = parent.children;
        for(var i=0; i<siblings.length; i++){
            if(ele === siblings[i]) return i;
        }
        return -1;
    }
};
var tab = document.getElementsByClassName("tab")[0];
tab.addEventListener("click",function (e) {
    var target = e.target,
        li = tab.children,
        index = Utils.indexOf(target),
        text = document.getElementsByClassName("text");
    if (index > -1) {
        Utils.removeClass(li,"active");
        Utils.addClass(target,"active");
        Utils.removeClass(text,"active");
        Utils.addClass(text[index],"active");
    }
})