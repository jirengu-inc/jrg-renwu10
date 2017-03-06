
var widCol = (function(){
    var ct = document.createElement('div');
    ct.classList.add('ct');

    var textCt = document.createElement('div');
    textCt.classList.add('text-ct');

    var widthSpan = document.createElement('span');
    widthSpan.classList.add('width-sp');

    var colorSpan = document.createElement('span');
    colorSpan.classList.add('color-sp');

    var showCol = document.createElement('span');
    showCol.classList.add('show-col');

    var widTit = document.createElement('p');
    widTit.classList.add('wid-tit');

    var colTit = document.createElement('p');
    colTit.classList.add('col-tit');

    var wid,col;
    
    function render(node) {
        calWidCol();

        widTit.innerText = '宽度：' + wid;
        colTit.innerText = '颜色：';

        widthSpan.appendChild(widTit);
        colorSpan.appendChild(colTit);

        showCol.style.backgroundColor = col;
        colorSpan.appendChild(showCol);

        textCt.appendChild(widthSpan);
        textCt.appendChild(colorSpan);

        ct.appendChild(textCt);

        node.insertBefore(ct,node.firstChild);
    }

    function calWidCol(){
        wid = window.getComputedStyle(document.body).width;
        col = window.getComputedStyle(document.body).backgroundColor;
    }

    return {
        show: function(node){
            render(node);
        }
    }
})();

widCol.show(document.querySelector('body'));

window.addEventListener('resize', function(){
    widCol.show(document.querySelector('body'));
})
