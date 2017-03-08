/**
 * Created by edward on 2017/3/7.
 */
let lock = false;
document.body.addEventListener('click',function(e){
    if(lock){
        return;
    }
    lock = true;
    ajax({
        url:'/more',
        type:'GET',
        dataType:'json',
        data:{length:2},
        datastr:{},
        success:function(){
            appendData();
            lock = false;
        } ,
        error:function(){
            console.log('出错了');
            lock = false;
        }
    });
});

function ajax(options){
    const success = options.success || function(){};
    const error = options.error || function(){};
    const type = options.type || 'GET';
    const dataType = options.dataType || 'json';
    const data = options.data || {};
    let dataStr = options.dataStr || '';
    let url = options.url;

    url = url.trim()+'?';
    for(const key of Object.keys(data)){
        url += `${safeEscape(key)}=${safeEscape(data[key])}`+'&';
    }
    url = url.substr(0,url.length-1);
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status == 200 || xmlHttp.status == 304){
                if(dataType === 'text'){
                    success(xmlHttp.responseText);
                }
                if(dataType === 'json'){
                    var json = JSON.parse(xmlHttp.responseText);
                    success(json);
                }
            }
        }else{
            error();
        }
    }
    dataStr = dataStr.substr(0,dataStr.length -1 );
    if(type.toLocaleLowerCase() === 'post'){
        xmlHttp.open(type,options.url,true);
        xmlHttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xmlHttp.send(dataStr);
    }
    if(type.toLocaleLowerCase() === 'get'){
        xmlHttp.open(type,url,true);
        xmlHttp.send();
    }
}

function appendData(element,result){
    let fragment = document.createDocumentFragment();
    for(let i = 0; i < result.length; ++i){
        let li = document.createElement('li');
        let textNode = document.createTextNode(`内容${result[i]}`);
        li.appendChild(textNode);
        fragment.appendChild(li);
    }
    element.appendChild(fragment);
}

function safeEscape(opt){
    return encodeURIComponent(opt);
}