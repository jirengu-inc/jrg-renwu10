function isValidUsernm(str){
	return /^\w{3,10}$/.test(str);
}

function isValidPsw(str){
	if(str.length>15||str.length<6){
		return false;
	}
	if(/\W/.test(str)){
		return false;
	}
	if(/(^[A-Z]+$)|(^[a-z]+$)|(^[0-9]+$)|(^_+$)/g.test(str)){
		return false;
	}
	return true;
}