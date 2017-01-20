

function isLegalUsername(str){
	return /^[A-Za-z_0-9]{3,10}$/.test(str);
}


function isLegalPassword(str){
	if(str.length < 6 || str.length > 16){
		return false;
	}

	if(/[^A-Za-z_0-9]/.test(str)){
		return false;
	}


	if( /(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str) ){
		return false;
	}
	return true;
}

