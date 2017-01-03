var classOpt={
    // 测试一个元素是否包含这个类名
    hasClass:function(elem,str){
        var reg=new RegExp('(\\s|^)'+str+'(\\s|$)','g');
        return reg.test(elem.className);
    },
    // 移除一个元素的类名
    singleRemoveClass: function (elem, str) {
        var reg=new RegExp('(\\s|^)'+str+'(\\s|$)','g');
        elem.className=(elem.className).replace(reg,"");
    },
    // 移除多个元素的类名
    removeClass: function (elems, str) {
        if (elems.length && elems.length > 0) {
            for (var i = 0; i < elems.length; i++) {
                classOpt.singleRemoveClass(elems[i], str);
            }
        }else{
            classOpt.singleRemoveClass(elems, str);
        }
    },
    // 给一个元素的class添加一个类名
    singleAddClass: function (elem, str) {
        if(!classOpt.hasClass(elem,str)){
            elem.className=elem.className+" "+str;
        }
    },
    // 给多个元素的class添加一个类名
    addClass: function (elems, str) {
        if (elems.length && elems.length > 0) {
            for (var i = 0; i < elems.length; i++) {
                classOpt.singleAddClass(elems[i], str);
            }
        }else{
            classOpt.singleAddClass(elems, str);
        }
    }
}