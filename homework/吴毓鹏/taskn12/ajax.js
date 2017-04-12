function ajax(opts) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {

		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var result = JSON.parse(xmlhttp.responseText)
			opts.success(result);
		}

		if(xmlhttp.readyState == 4 && xmlhttp.status == 404) {
			opts.error();
		}
	};

	var dataString = '';
	for(var key in opts.data) {
		dataString += key + '=' + opts.data[key] + '&';
	}
	dataString = dataString.substring(0, dataString.length - 1);
	if(opts.type.toLowerCase() === 'get') {
		xmlhttp.open('get', opts.url + '?' + dataString, true);
		xmlhttp.send();
	}
	if(opts.type.toLowerCase() === 'post') {
		xmlhttp.open('post', opts.url, true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(dataString);
	}
}

