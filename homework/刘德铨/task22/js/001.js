/*----------------------1-----------------------*/
/* var ct = document.getElementsByClassName('ct')[0];
 console.log(ct);
 function addEvent(node, type, handler){
     if(!node) return false;
     if(node.addEventListener){
         node.addEventListener(type, handler, false);
         return true;
     }
     else if(node.attachEvent){
         node['e' + type + handler] = handler;
         node[type + handler] = function(){
             node['e' + type + handler](window.event);
         }
         node.attachEvent('on' + type, node[type + handler]);
         return true;
     }
     return false;
 }
 console.log(addEvent(ct, 'click', function(e){
     console.log(e.target.innerText);
 }));*/

var ct = document.getElementsByClassName('ct')[0];
ct.addEventListener('click', function(e) {
    console.log(e.target.innerText);
}, false);


/*----------------------2-----------------------*/

var iptAddContent = document.getElementsByClassName('ipt-add-content')[0];
var warningTip = document.getElementsByClassName('warning-tip')[0];
var btnAddStart = document.getElementById('btn-add-start');
var btnAddEnd = document.getElementById('btn-add-end');


iptAddContent.addEventListener('input', function() {
    warningTip.style.display = 'none';
}, false);

btnAddStart.addEventListener('click', function(e) {
    var iptAddContentValue = iptAddContent.value;
    if (iptAddContentValue !== '') {
        warningTip.style.display = 'none';
        var newLi = document.createElement('li');
        newLi.innerText = iptAddContentValue;
        ct.insertBefore(newLi, ct.firstChild);
    } else {
        warningTip.style.display = 'inline-block';
    }
}, false);

btnAddEnd.addEventListener('click', function(e) {
    var iptAddContentValue = iptAddContent.value;
    if (iptAddContentValue !== '') {
        var newLi = document.createElement('li');
        newLi.innerText = iptAddContentValue;
        ct.insertBefore(newLi, ct.lastChild);
    } else {
        warningTip.style.display = 'inline-block';
    }
}, false);



/*----------------------3-----------------------*/

var imgList = document.getElementsByClassName('img-list')[0];
var imgPreview = document.getElementsByClassName('img-preview')[0];

imgList.addEventListener('mouseover', function(e) {
    var imgSrc = e.target.getAttribute('data-img');
    if (imgSrc) {
        imgPreview.innerHTML = ' <img src=" ' + imgSrc + ' " > ';
    }
}, false);


/*----------------------4-----------------------*/

var tabTitle = document.getElementsByClassName('tab-title')[0];
var tabLi = tabTitle.getElementsByTagName('li');
var panel = document.getElementsByClassName('panel');

/*
//方法1
for(var i = j = 0; i < tabLi.length; i++){
   ( function(i){
        tabLi[i].addEventListener('click', function(){
            for(var j = 0; j < panel.length; j++){
                panel[j].className = panel[j].className.replace(/active/,'');
                tabLi[j].className = tabLi[j].className.replace(/active/, '');
            }
            panel[i].className += ' active';
            tabLi[i].className += ' active';
        },false);
    } )(i);
}
*/

//方法2
/*var oldindex = 0;
for (var i = j = 0; i < tabLi.length; i++) {
    (function(i) {
        tabLi[i].addEventListener('click', function() {
            panel[oldindex].className = panel[oldindex].className.replace(/active/, '');
            tabLi[oldindex].className = tabLi[oldindex].className.replace(/active/, '');
            panel[i].className += ' active';
            tabLi[i].className += ' active';
            oldindex = i;
        }, false);
    })(i);
}*/


//方法3
var oldindex = 0;
var fnArr = [];

function changeActive(i) {
        tabLi[i].addEventListener('click', function() {
            panel[oldindex].className = panel[oldindex].className.replace(/active/, '');
            tabLi[oldindex].className = tabLi[oldindex].className.replace(/active/, '');
            panel[i].className += ' active';
            tabLi[i].className += ' active';
            oldindex = i;
        }, false);
 }


 for (var i = 0; i < tabLi.length; i++) {
    fnArr[i] = changeActive(i);
}



/*----------------------5-----------------------*/

var modal = document.getElementsByClassName('modal')[0];
var modalStyle = document.defaultView.getComputedStyle(modal, null);
var btnModal = document.getElementById('btn-modal');

var modalText = document.getElementsByClassName('modal-text')[0];
var modalTextContent = document.getElementsByClassName('modal-text-content')[0];
var modalTextStyle = document.defaultView.getComputedStyle(modalText, null);

var modalShade = document.querySelector('.modal-shade');
var modalEdit = document.querySelector('.modal-edit');
var modalEditClose = document.querySelector('.modal-edit-close');
var modalEditCancel = document.querySelector('.modal-edit-cancel');

var textSizeRange = document.querySelector('#text-size');
var textSizeShow = document.querySelector('.text-size-show');
var textColorChoose = document.querySelector('#text-color-choose');
var bagColorChoose = document.querySelector('#bag-color-choose');
var textWidth = document.querySelector('#text-width');
var textHeight = document.querySelector('#text-height');
var modalEditConfirm = document.querySelector('.modal-edit-confirm');

var modalTextPreSituation = {
    "textSize": modalTextStyle.fontSize,
    "textColor": modalTextStyle.color,
    "bagColor": modalTextStyle.backgroundColor,
    "textWidth": modalTextStyle.width,
    "textHeight": modalTextStyle.height
};

btnModal.addEventListener('click', function(e) {
    if (!/active/.test(modalEdit.className)) {
        modalEdit.className += ' active';
        modalShade.className += ' active';
    }
}, false);


modalShade.addEventListener('click', function(e) {
    modalEdit.className = modalEdit.className.replace(/ active/, '');
    modalShade.className = modalShade.className.replace(/ active/, '');
}, false);

modalEditClose.addEventListener('click', function(e) {
    modalEdit.className = modalEdit.className.replace(/ active/, '');
    modalShade.className = modalShade.className.replace(/ active/, '');
}, false);


textSizeRange.addEventListener('change', function(e) {
    textSizeShow.placeholder = textSizeRange.value + 'px';
    modalText.style.fontSize = textSizeRange.value + 'px';
}, false);


textColorChoose.addEventListener('change', function(e) {
    modalText.style.color = textColorChoose.value;
}, false);


bagColorChoose.addEventListener('change', function(e) {
    modalText.style.backgroundColor = bagColorChoose.value;
}, false);


textWidth.addEventListener('change', function(e) {
    textWidth.value = textWidth.value.replace(/[^.\d]/g, '');
    var width = modalStyle.width.replace(/[^.\d]/g, '');
    if (textWidth.value > width - 40) {
        textWidth.placeholder = '最宽<=' + (width - 40) + 'px';
        textWidth.value = '';
        modalText.style.width = modalTextPreSituation.textWidth;
        return;
    }
    if (textWidth.value < 100) {
        textWidth.placeholder = '最窄>=' + '100px';
        textWidth.value = '';
        modalText.style.width = modalTextPreSituation.textWidth;
        return;
    }
    modalText.style.width = textWidth.value + 'px';
    textWidth.placeholder = textWidth.value + 'px' + 'Min:100,Max:父级宽-40';
}, false);


textHeight.addEventListener('change', function(e) {
    textHeight.value = textHeight.value.replace(/[^.\d]/g, '');
    var height = modalStyle.height.replace(/[^.\d]/g, '');
    if (textHeight.value > height - 120) {
        textHeight.placeholder = '最高<=' + (height - 120) + 'px';
        textHeight.value = '';
        modalText.style.height = modalTextPreSituation.textHeight;
        return;
    }
    if (textHeight.value < 200) {
        textHeight.placeholder = '最矮>=' + '200px';
        textHeight.value = '';
        modalText.style.height = modalTextPreSituation.textHeight;
        return;
    }
    modalText.style.height = textHeight.value + 'px';
    textHeight.placeholder = textHeight.value + 'px' + 'Min:200,Max:680';
}, false);



modalEditConfirm.addEventListener('click', function(e) {
    modalEdit.className = modalEdit.className.replace(/ active/, '');
    modalShade.className = modalShade.className.replace(/ active/, '');
    modalTextPreSituation.textSize = modalText.style.fontSize;
    modalTextPreSituation.textColor = modalText.style.color;
    modalTextPreSituation.bagColor = modalText.style.backgroundColor;
    modalTextPreSituation.textWidth = modalText.style.width;
    modalTextPreSituation.textHeight = modalText.style.heigh;

    textWidth.value = '';
    textHeight.value = '';
}, false);



modalEditCancel.addEventListener('click', function(e) {
    modalEdit.className = modalEdit.className.replace(/ active/, '');
    modalShade.className = modalShade.className.replace(/ active/, '');

    modalText.style.fontSize = modalTextPreSituation.textSize;
    textSizeShow.placeholder = modalTextPreSituation.textSize;
    textSizeRange.value = modalTextPreSituation.textSize;

    modalText.style.color = modalTextPreSituation.textColor;
    textColorChoose.value = modalTextPreSituation.textColor;

    modalText.style.backgroundColor = modalTextPreSituation.bagColor;
    bagColorChoose.value = modalTextPreSituation.bagColor;

    modalText.style.width = modalTextPreSituation.textWidth;
    textWidth.placeholder = modalTextPreSituation.textWidth + ' Min:100,Max:父级宽-40';
    textWidth.value = '';

    modalText.style.height = modalTextPreSituation.textHeight;
    textHeight.placeholder = modalTextPreSituation.textHeight + ' Min:200,Max:680';
    textHeight.value = '';
}, false);