function ajax(opts){
	opts.success = opts.success || function(){};
	opts.error = opts.error || function(){};
	opts.type = opts.type || 'get';
	opts.data = opts.data || {};

	var dataStr = '';
	for(var key in opts.data){
		dataStr += key+'='+opts.data[key]+'&';
	}
	dataStr = dataStr.substr(0,dataStr.length-1);
    var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
  	if(xmlhttp.readyState===4){
  		if(xmlhttp.status===200){
  			opts.success(JSON.parse(xmlhttp.responseText))
  		}else{
  			opts.error();
  		}
  	}
  };
  if(opts.type.toLowerCase()==='post'){
  	xmlhttp.open(opts.type,opts.url,true);
  	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	xmlhttp.send(dataStr);
  }
  if(opts.type.toLowerCase()==='get'){
  	xmlhttp.open(opts.type,opts.url+'?'+dataStr,true);
  	xmlhttp.send();
  }
}

