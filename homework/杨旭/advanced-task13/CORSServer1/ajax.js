/**
 * Created by Edward on 2017/3/10.
 */
function ajax(options) {
    const success = options.success || function(){};
    const error = options.error || function(){};
    const type = options.type || 'GET';
    const dataType = options.dataType || 'json';
    const data = options.data ||　{};
    let url = options.url || '';

    url += url.trim()+'?';
    for(const key of Object.keys(data)){
        url += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`+'&';
    }
    url = url.slice(0,url.length-1);

    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function(){
        if(xmlHttpRequest.readyState == 4){
            if(xmlHttpRequest.status == 200 || xmlHttpRequest.status == 304){
                if(dataType === 'text'){
                    success(xmlHttpRequest.responseText);
                }
                if(dataType === 'json'){
                    success(JSON.parse(xmlHttpRequest.responseText))
                }
            }
        }else{
            error();
        }
    }

    if(type.toLocaleLowerCase() === 'get'){
        xmlHttpRequest.open(type,options.url,true);
        xmlHttpRequest.send();
    }
}